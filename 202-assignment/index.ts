class employee{
    name: string
    title: string
    department: string
    salary: number
    constructor(name:string,title:string,department:string,salary:number){
        this.name = name;
        this.title = title;
        this.department = department;
        this.salary = salary;
    }
    printSalary(): string {
        return "$"+this.salary;   
    }
    printDetails(): string {
        return this.name+" is a " + this.title +" in the " + this.department + " with a salary of $" + this.salary;
    }
}

class Manager extends employee{
    constructor(name:string, title:string,department:string,salary:number,public teamsize:number=1,private managerBonus:number =1500){
        super(name, title,department,salary);
    }
    printSalary(): string{
        return "$"+String(this.salary + this.managerBonus)
    }
    printDetails(): string {
        return super.printDetails() +`
`+ this.name + " manages " + this.teamsize + " employee(s)"
    }
}

let eric = new employee("Eric","Junior developer","Software department",60000)
let Jamie = new Manager("Jamie","Senior Developer","Software department",101500)
console.log(eric.printDetails())
console.log(Jamie.printDetails())