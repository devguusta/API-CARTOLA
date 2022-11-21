import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [
        AdminController
    ],
    providers: [
        AdminService,
    ],
})



export class AdminModule{

}