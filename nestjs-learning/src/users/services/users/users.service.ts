import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Rono', email: 'rono@gmail.com' },
        { username: 'parth', email: 'parth@gmail.com' },
        { username: 'prarth', email: 'prarth@gmail.com' },
    ]
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: createUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUsaerById(id: number) {
        return {id: id, username: 'Rono', email: "rono@gmail.com"}
    }
}
