interface IComputer{
    id: number
    name: string
    getInfo(): string
}

abstract class Laptop implements IComputer {
    id: number
    name: string
    year: number
    static counterLaptop: number = 0

    constructor(Id: number, Name: string) {
        this.id = Id
        this.name = Name
        Laptop.counterLaptop++
    }

    public getInfo(): string {
        return 'id: ' + this.id + '\nname: ' + this.name
    }

    abstract getYear(): string
}

class UltraBook extends Laptop{
    private model: string = 'Ultra Book'
    getModel(){
        return 'Laptop model: ' + this.model
    }
    getYear(): string {
        return 'Year: ' + this.year;
    }
}

let asus: Laptop = new UltraBook(1, 'asus')
console.log(asus.getInfo())
let lenovo: UltraBook = new UltraBook(2, 'lenovo')
console.log(lenovo.getInfo())
console.log(lenovo.getModel())
console.log('counter: ' + Laptop.counterLaptop)
asus.year = 2020
console.log(asus.getYear())

class MacBook extends UltraBook{
    readonly company: string = 'Apple'
    getCompany(): string{
        return 'Laptop company: ' + this.company
    }
}

let macBook: MacBook = new MacBook(3, 'MacBook Pro')
console.log(macBook.getCompany())
