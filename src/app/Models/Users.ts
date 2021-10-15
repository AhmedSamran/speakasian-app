import { Level } from './Level';

export class Users {
    private email: string;
    private password: string;
    private firstName: string;
    private lastName: string;
    private birthDate: Date;
    private level: Level[]; // TBD

    constructor() {}

    public set Email(email: string) {
        this.email = email;
    }

    public get Email(): string {
        return this.email;
    }

    public set Password(password: string) {
        this.password = password;
    }

    public set FirstName(firstName: string) {
        this.firstName = firstName;
    }

    public get FirstName(): string {
        return this.firstName;
    }

    public set LastName(lastName: string) {
        this.lastName = lastName;
    }

    public get LastName(): string {
        return this.lastName;
    }

    public set BirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }

    public get BirthDate(): Date {
        return this.birthDate;
    }

    public set Level(level: Level[]) {
        this.level = level;
    }

    public get Level(): Level[] {
        return this.level;
    }
}
