import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AdminGuard } from "src/auth/guard/admin.guard";
import { AdminService } from "./admin.service";

@UseGuards(AdminGuard)
@Controller('admin')
export class AdminController {
    constructor(
        private adminService: AdminService
    ){}
   
    
 @Get('users')
 getAllUsers(){
    return this.adminService.findAllUsers();

 }
 @Get('user/:id')
 getUser(@Param('id') id: number,){
    console.log(id);
    return this.adminService.findOneUser(id);

 }
}