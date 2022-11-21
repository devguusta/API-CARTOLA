import { Controller, Get, Param } from "@nestjs/common";
import { AdminService } from "./admin.service";

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