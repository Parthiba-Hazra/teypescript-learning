import { createUserType } from 'src/utils/types';
export declare class UsersService {
    private fakeUsers;
    fetchUsers(): {
        username: string;
        email: string;
    }[];
    createUser(userDetails: createUserType): void;
    fetchUsaerById(id: number): {
        id: number;
        username: string;
        email: string;
    };
}
