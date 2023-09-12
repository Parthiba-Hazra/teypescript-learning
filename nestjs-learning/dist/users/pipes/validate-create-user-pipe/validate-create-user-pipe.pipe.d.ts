import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
export declare class ValidateCreateUserPipePipe implements PipeTransform {
    transform(value: CreateUserDto, metadata: ArgumentMetadata): {
        age: number;
        username: string;
        email: string;
    };
}
