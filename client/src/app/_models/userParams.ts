import { User } from "./user";

export class UserParamas {
    gender: string;
    minAge =  1;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';
    
    constructor(user: User | null) {
        this.gender = user?.gender === 'female' ? 'male' :'female';
    }
}