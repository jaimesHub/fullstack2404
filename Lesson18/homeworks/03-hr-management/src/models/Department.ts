import Employee from "./Employee";

export default class Department {
    constructor(
        public id: number, 
        public name: string,
        public employees: Employee[] = []
    ) {}
}