// User management

// class User {
//     id: number;
//     username: string;
//     email: string;
//     password: string;
//     role: string;

//     constructor(
//         id: number,
//         username: string,
//         email: string,
//         password: string,
//         role: string
//     ) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }
// }

type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}

type UpdateUser = {
    username?: string;
    email?: string;
    password?: string;
    role?: string;
}

class UserManagement {
    users: User[];

    constructor(users: User[]) {
        this.users = users;
    }

    // List of products management
    add(user: User): User {
        this.users.push(user);
        return user;
    }

    delete(userId: number): User[] {
        const updatedUsers = this.users.filter(user => user.id != userId);
        this.users = [...updatedUsers];
        return this.users;
    }

    update(userId: number, input: UpdateUser): User | string {
        const foundUser = this.users.find(user => user.id === userId);

        if (!foundUser) {
            return "Not found;"
        }

        const { 
            username,
            email,
            password,
            role
        } = input;

        if (username) {
            foundUser.username = username;
        }

        if (email) {
            foundUser.email = email;
        }

        if (password) {
            foundUser.password = password;
        }

        if (role) {
            foundUser.role = role;
        }

        for (let user of this.users) {
            if (user.id === foundUser.id) {
                user = {...foundUser};
            }
        }

        return foundUser;
    }

    list(): User[] {
        return this.users;
    }

    // Handling with data
    changePassword(userId: number, newPassword: string): boolean {
        const foundUser = this.users.find(user => user.id === userId);

        if (!foundUser) {
            return false;
        }

        foundUser.password = newPassword;

        return true;
    }

    findUserByEmail(email: string): User[] {
        return this.users.filter(user => user.email === email);
    }
}