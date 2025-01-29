class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    displayBookDetails() {
        return `
            <div class="book-card">
                <div class="book-title">${this.title}</div>
                <div class="book-info">Author: ${this.author}</div>
                <div class="book-info">Year: ${this.year}</div>
                <div class="book-info">Price: $${this.price}</div>
            </div>
        `;
    }

    getDiscountPrice(discount) {
        return this.price - (this.price * (discount / 100));
    }
}

class AdventureBook extends Book {
    constructor(title, author, year, price, location, difficultyLevel) {
        super(title, author, year, price);
        this.location = location;
        this.difficultyLevel = difficultyLevel;
    }

    displayBookDetails() {
        return `
            <div class="book-card adventure">
                <div class="book-title">${this.title}</div>
                <div class="book-info">Author: ${this.author}</div>
                <div class="book-info">Year: ${this.year}</div>
                <div class="book-info">Location: ${this.location}</div>
                <div class="book-info">Difficulty Level: ${this.difficultyLevel}</div>
                <div class="book-info">Price: $${this.price}</div>
            </div>
        `;
    }

    getDiscountPrice(discount) {
        let discountedPrice = super.getDiscountPrice(discount);
        return `Discounted price: $${discountedPrice}. Adventure awaits!`;
    }

    getAdventureDetails() {
        return `This adventure book takes you on a journey to ${this.location} with a difficulty level of ${this.difficultyLevel}.`;
    }
}

class SatireBook extends Book {
    constructor(title, author, year, price, theme, humorLevel) {
        super(title, author, year, price);
        this.theme = theme;
        this.humorLevel = humorLevel;
    }

    displayBookDetails() {
        return `
            <div class="book-card satire">
                <div class="book-title">${this.title}</div>
                <div class="book-info">Author: ${this.author}</div>
                <div class="book-info">Year: ${this.year}</div>
                <div class="book-info">Theme: ${this.theme}</div>
                <div class="book-info">Humor Level: ${this.humorLevel}</div>
                <div class="book-info">Price: $${this.price}</div>
            </div>
        `;
    }

    getDiscountPrice(discount) {
        let discountedPrice = super.getDiscountPrice(discount);
        return `Get this satire book at a discounted price of $${discountedPrice}. Laugh out loud!`;
    }

    getSatiricalContent() {
        return `This book humorously discusses the theme of ${this.theme} with a humor level of ${this.humorLevel}.`;
    }
}

class FantasyBook extends Book {
    constructor(title, author, year, price, magicalElements, mythicalCreatures) {
        super(title, author, year, price);
        this.magicalElements = magicalElements;
        this.mythicalCreatures = mythicalCreatures;
    }

    displayBookDetails() {
        return `
            <div class="book-card fantasy">
                <div class="book-title">${this.title}</div>
                <div class="book-info">Author: ${this.author}</div>
                <div class="book-info">Year: ${this.year}</div>
                <div class="book-info">Magical Elements: ${this.magicalElements}</div>
                <div class="book-info">Mythical Creatures: ${this.mythicalCreatures}</div>
                <div class="book-info">Price: $${this.price}</div>
            </div>
        `;
    }

    getDiscountPrice(discount) {
        let discountedPrice = super.getDiscountPrice(discount);
        return `You can get this fantasy book at a discounted price of $${discountedPrice}. The magic awaits!`;
    }

    getFantasyDetails() {
        return `This fantasy book is filled with ${this.magicalElements} and mythical creatures like ${this.mythicalCreatures}.`;
    }
}

class BookStore {
    constructor(arr) {
        this.books = arr;
    }

    render() {
        let main = document.getElementById("book-list");
        this.books.forEach(book => {
            main.innerHTML += book.displayBookDetails();
        });
    }
}

const books = [
    new AdventureBook("The Lost Island", "John Doe", 2022, 25, "Tropical Island", "Hard"),
    new SatireBook("The Great Fiasco", "Jane Doe", 2021, 15, "Political Satire", "High"),
    new FantasyBook("The Dragon's Curse", "Emma Smith", 2020, 30, "Magic Spells", "Dragons"),
    new AdventureBook("Lost in the Jungle", "Alice Johnson", 2019, 18, "Amazon Rainforest", "Medium"),
    new SatireBook("The Political Comedy", "Bob White", 2018, 12, "Politics", "Medium"),
    new FantasyBook("The Phoenix's Fire", "Mary Brown", 2021, 35, "Fire Spells", "Phoenix")
];

new BookStore(books).render();
