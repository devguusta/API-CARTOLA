import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { AdminService } from "./admin.service";

@UseGuards(JwtGuard)
@Controller('admin')
export class AdminController {
    constructor(
        private adminService: AdminService
    ){}
   
    
 @Get('users')
 getAllUsers( @Req() req){
   const {admin} = req.user;
    return this.adminService.findAllUsers(admin);

 }
 @Get('user/:id')
 getUser(@Param('id') id: number, @Req() req){
   console.log(req.user.admin + "ola");
   const {admin} = req.user;
   
    console.log(id);
    return this.adminService.findOneUser(id, admin);

 }
}