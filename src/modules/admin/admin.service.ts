import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

export class AdminService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private config: ConfigService,
    ){}

    async findAllUsers(admin: boolean){
        try {
            if(!admin){
                throw new UnauthorizedException("Required admin account");
            }
            const users =  await  this.userRepository.find();
            if(!users){
                return new BadRequestException();
            }
            return users;
        } catch (error) {
            console.log(error);
           throw error;
        }
      
      }

    async findOneUser(id: number, admin: boolean){
        try {
            if(!admin){
                throw new UnauthorizedException("Required admin account");
            }
            const user = await this.userRepository.findOne({
                where: {
                    id: id,
                }
            })
            console.log(user);
            if(!user ){
                return new BadRequestException('user not found');
            }
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
      
    }
    
}