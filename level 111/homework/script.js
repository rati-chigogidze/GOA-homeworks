class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    displayInfo() {
        return `${this.title} by ${this.author}, published in ${this.year}. Genre: ${this.genre}`;
    }

    isClassic() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year > 50;
    }

    get titleInfo() {
        return this.title;
    }
}

class Adventure extends Book {
    constructor(title, author, year, difficulty) {
        super(title, author, year, "Adventure");
        this.difficulty = difficulty;
        this.isInvolvingNature = true;
    }

    displayInfo() {
        return `${this.title} by ${this.author} (Adventure), published in ${this.year}. Difficulty: ${this.difficulty}`;
    }

    isSuitableForBeginners() {
        return this.difficulty < 5;
    }

    involvesNature() {
        return this.isInvolvingNature ? `${this.title} involves nature.` : `${this.title} does not involve nature.`;
    }

    get adventureDifficulty() {
        return this.difficulty;
    }

    get natureInvolved() {
        return this.isInvolvingNature;
    }
}

class Satire extends Book {
    constructor(title, author, year, target) {
        super(title, author, year, "Satire");
        this.target = target;
        this.isDarkHumor = false;
    }

    displayInfo() {
        return `${this.title} by ${this.author} (Satire), published in ${this.year}. Target: ${this.target}`;
    }

    hasDarkHumor() {
        return this.isDarkHumor;
    }

    analyzeTarget() {
        return `${this.title} targets ${this.target}.`;
    }

    get satireTarget() {
        return this.target;
    }

    get darkHumorPresence() {
        return this.isDarkHumor;
    }
}

class Fantasy extends Book {
    constructor(title, author, year, magicLevel) {
        super(title, author, year, "Fantasy");
        this.magicLevel = magicLevel;
        this.hasDragons = false;
    }

    displayInfo() {
        return `${this.title} by ${this.author} (Fantasy), published in ${this.year}. Magic Level: ${this.magicLevel}`;
    }

    containsDragons() {
        return this.hasDragons ? `${this.title} contains dragons.` : `${this.title} does not contain dragons.`;
    }

    getMagicLevel() {
        return `${this.title} has a magic level of ${this.magicLevel}.`;
    }

    get fantasyMagicLevel() {
        return this.magicLevel;
    }

    get dragonsPresence() {
        return this.hasDragons;
    }
}

const adventureBook = new Adventure("The Lost World", "Arthur Conan Doyle", 1912, 7);
console.log(adventureBook.displayInfo());
console.log(adventureBook.isSuitableForBeginners());
console.log(adventureBook.involvesNature());

const satireBook = new Satire("Animal Farm", "George Orwell", 1945, "Totalitarian regimes");
console.log(satireBook.displayInfo());
console.log(satireBook.hasDarkHumor());
console.log(satireBook.analyzeTarget());

const fantasyBook = new Fantasy("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997, 8);
console.log(fantasyBook.displayInfo());
console.log(fantasyBook.containsDragons());
console.log(fantasyBook.getMagicLevel());
