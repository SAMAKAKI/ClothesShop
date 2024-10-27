/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { SignUpInterface, SignInInterface } from './user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async signUp(signUp: SignUpInterface) {
    const { username, email, password, rePassword } = signUp;

    const checkUsername = await this.prismaService.user.findUnique({
      where: { username },
    });

    const checkEmail = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (checkUsername) 
      throw new HttpException('User with this username already exist', HttpStatus.BAD_REQUEST);

    if (checkEmail) 
      throw new HttpException('User with this email already exist', HttpStatus.BAD_REQUEST);

    if(password !== rePassword)
      throw new HttpException('Password and Repeat password must be the same', HttpStatus.BAD_REQUEST);

    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    await this.prismaService.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    }).then(() => {
      throw new HttpException('User has been registered', HttpStatus.CREATED);
    });
  }

  async signIn(signIn: SignInInterface) {
    const { email, password } = signIn;

    const checkEmail = await this.prismaService.user.findUnique({
      where: { email: email },
    });

    if(checkEmail){
      if(!checkEmail.isVerified)
        throw new HttpException('You must activate your account', HttpStatus.BAD_REQUEST)

      const comparePass = await bcrypt.compare(password, checkEmail.password)

      if(!comparePass)
        throw new HttpException('Incorrect Email or Password', HttpStatus.BAD_REQUEST)


      
    } else {
      throw new HttpException('User with this email does not exist', HttpStatus.BAD_REQUEST)
    }

  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserDto: {username: string}) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
