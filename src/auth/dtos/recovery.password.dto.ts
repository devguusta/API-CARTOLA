
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class RecoveryPasswordDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    @Length(8)
    oldPassword: string;
    @IsString()
    @IsNotEmpty()
    @Length(8)
    newPassword: string;
}