# Лабораторная работа 3
### На тему: ООП в typescript
В данной лабораторной работе я выбрала модель - Компьтеров.

В самом начале я решила создать интерфейс **Computer**, 
где объявлены пару пременных и один метод
```
interface IComputer{
       id: number
       name: string
       getInfo(): string
}
```

Далее я создала абстрактный класс **Laptop**, который имплементируется 
от интерфейса **Computer** и реализвовывает его переменые и методы. 
В этом же классе я создала статический переменную, 
которая при создании нового объекта учеличивается на еденицу, 
то есть мы можем узнать сколько объектов создали.
Тут же рализовала конструктор и один метод **getInfo()** 
и один абстрактный метод **getYear()**
```
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
```

Затем создала класс **UltraBook**, который наследуется от абстрактного класса Laptop.
В нем создала приватную переменную, которая через метод **getModel()** 
выводится на консоль. Далее нам нужно реализовать метод **getYear()**, 
так как мы наследуем от абстрактого класса, в котором был абстрактный метод.
```
class UltraBook extends Laptop{
    private model: string
    getModel(){
        return 'Laptop model: ' + this.model
    }
    getYear(): string {
        return 'Year: ' + this.year;
    }
}
```

Теперь для примера создадим объекты и попробуем 
обратиться в некоторым методам этих объектов.
```
let asus: Laptop = new UltraBook(1, 'asus')
console.log(asus.getInfo())
let lenovo: UltraBook = new UltraBook(2, 'lenovo')
console.log(lenovo.getInfo())
console.log(lenovo.getModel())
console.log('counter: ' + Laptop.counterLaptop)
asus.year = 2020
console.log(asus.getYear())
```

Вот так у нас выводится в консоли. <br> Первые 
четыре строчки это вывод нашего метода **getInfo()**. <br>
Пятая строка это вызов метода **getModel()**. <br>
Шестая - это наш счетчик обьектов класса **Laptop**. 
Мы создали два оъбекта и следовательно вывелось значение двойки <br>
Седьмая -  это вывод нашего метода **getYear()**.
```
id: 1
name: asus
id: 2
name: lenovo
Laptop model: Ultra Book
counter: 2
Year: 2020
```

Я создала еще один класс **MacBook** наследуемый от **UltraBook**, 
где я добавила readonly переменую и один метод, который 
выводит соответсвующую строку. И также создала для примера 
объект этого класса и вывела на консоль результат работы метода.
```
class MacBook extends UltraBook{
    readonly company: string = 'Apple'
    getCompany(): string{
        return 'Laptop company: ' + this.company
    }
}

let macBook: MacBook = new MacBook(3, 'MacBook Pro')
console.log(macBook.getCompany())
```
Вывод:
```
Laptop company: Apple
```
