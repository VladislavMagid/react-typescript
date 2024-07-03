import "./styles.css";

function Lesson06() {
  //1 type string
  let userFullName: string = "John Johnson";
  userFullName = "Johny Depp";

  let hello = `hello, ${userFullName}`;
  console.log(hello);

  // 2 type: number
  let number: number = 100;

  let number2: number = number / 0;

  //3 type: boolean
  let isAdmin: boolean = true;
  isAdmin = false;

  // 4 - array
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);

  // 5 - tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];

  // 6 - functions

  // функция, которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  const makeAllert: () => void = () => {
    alert("This is React Typescript App");
  };

  //   makeAllert();

  sayHi(userFullName);

  //6.1 - функция, которая что-то возвразает
  const add = (a: number, b: number): number => {
    return a + b;
  };

  console.log(add(1, 2));
  //7 - object

  interface Admin {
    isAdmin: boolean;
  }
  interface UserAnimal {
    pet?: string;
  }

  interface User extends Admin, UserAnimal {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
  }
  //Можно дописывать свойства в интерфейсе
  interface User {
    isFamily: boolean;
  }

  const user: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "dog",
    isFamily: true,
  };

  const user2: User = {
    firstName: "Johny",
    lastName: "Depp",
    age: 60,
    job: "Actor",
    isAdmin: false,
    isFamily: true,
  };

  //8 - undefined
  let userData: undefined = undefined;

  //9 - null
  let emptyVar: null = null;

  // 10 - any
  let someVariable: any = "some string";
  someVariable = 100;

  // 11 - type
  type UserDataFromServer = User | undefined | null;
  let userDataFromServer: UserDataFromServer = user;
  userDataFromServer = undefined;
  userDataFromServer = null;

  //типизация объектов

  type GlobalAnimalProps = {
    isAnimal: Boolean;
  };
  // нельзя наследовать типы
  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  type GlobalAnimal = GlobalAnimalProps & Animal;

  const animal1: GlobalAnimal = {
    isAnimal:true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  const animal2: GlobalAnimal = {
    isAnimal: true,
    type: "Lion",
    age: 8,
    color: "orange",
    isWild: true,
    speed: "74 kh/h",
  };

  return <div className="page-wrapper">Lesson 6</div>;
}

export default Lesson06;
