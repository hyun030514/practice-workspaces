function checkNumber(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

var person = {
  firstName: "GilDong",
  lastName: "Hong",
  age: 20
};

for (var key in person) {
  console.log(key + " : " + person[key]);
}

function add(a, b) {
  return a + b;
}

const greet = () => {
  return "Hello!";
};

const getInfo = (name, age) => {
  return `name: ${name}, age: ${age}`;
};

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`안녕하세요, 제 이름은 ${this.name} 이고 나이는 ${this.age}세입니다.`);
  };
}

const person2 = new Person("홍길동", 20);
person2.sayHello();

const user = {
  name: "gildong",
  age: 20
};

user.email = "hong@gmail.com";
user.age = 21;
delete user.name;

console.log(user);

const car = {
  brand: "Kia"
};

const fireCar = Object.create(car);
fireCar.color = "red";

console.log(fireCar.brand);
console.log(fireCar.color);

console.log("brand 자기 프로퍼티 여부:", fireCar.hasOwnProperty("brand"));
console.log("color 자기 프로퍼티 여부:", fireCar.hasOwnProperty("color"));