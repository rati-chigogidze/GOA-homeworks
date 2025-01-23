class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Book {
    constructor(title, author = "Unknown") {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}

class Classroom {
    constructor(students) {
        this.students = students;
    }

    countStudents() {
        console.log(`Number of students: ${this.students.length}`);
    }
}

class Counter {
    constructor() {
        this.value = 0;
    }

    increment() {
        this.value += 1;
    }

    getValue() {
        return this.value;
    }
}

class Light {
    constructor() {
        this.state = "off";
    }

    toggle() {
        this.state = this.state === "off" ? "on" : "off";
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    }
}

class User {
    constructor(username, contact) {
        this.username = username;
        this.contact = contact; // { email, phone }
    }

    getContactInfo() {
        console.log(`Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
    }
}

class Library {
    constructor(books) {
        this.books = books; // Array of { title, author }
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        console.log(`Items in cart: ${this.items.join(', ')}`);
    }
}

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    hasPassed() {
        const average = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
        return average >= 50;
    }
}

// Example usage
const person = new Person("Alice", 30);
person.introduce();

const book = new Book("1984", "George Orwell");
book.getDetails();

const classroom = new Classroom(["Alice", "Bob", "Charlie"]);
classroom.countStudents();

const counter = new Counter();
counter.increment();
console.log(counter.getValue());

const light = new Light();
light.toggle();
console.log(light.state);

const product = new Product("Laptop", 999);
product.getDetails();

const user = new User("john_doe", { email: "john@example.com", phone: "123-456-7890" });
user.getContactInfo();

const library = new Library([{ title: "1984", author: "George Orwell" }, { title: "Brave New World", author: "Aldous Huxley" }]);
library.listBooks();

const cart = new Cart();
cart.addItem("Laptop");
cart.addItem("Phone");
cart.getItems();

const student = new Student("Bob", [60, 70, 80]);
console.log(student.hasPassed());

