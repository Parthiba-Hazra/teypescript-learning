import { Body, Controller, Get, Post, Param, Req, Res, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { mergeWith } from 'rxjs';
import { ValidateCreateUserPipePipe } from 'src/users/pipes/validate-create-user-pipe/validate-create-user-pipe.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }

    @Get('posts')
    getUsersPosts(){
        return [{
            username: 'Rono',
            email: "rono@gmail.com",
            posts: [{
                id: 1,
                title: 'post 1'
            },
            {
                id: 2,
                title: 'post 2'
            }]
        }];
    }

    @Get('posts/comments')
    getUsersPostComments() {
        return [{
            id: 1,
            title: 'post 1',
            comments: [],
        }];
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    createUser(@Body(ValidateCreateUserPipePipe) userData: CreateUserDto) {
         console.log(userData)
         return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe) id: number) {
       const user = this.userService.fetchUsaerById(id);
       if (!user)
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user
    }
}

