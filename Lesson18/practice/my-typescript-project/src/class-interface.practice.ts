// Library management

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
};

interface Member {
    id: number;
    name: string;
    borrowedBooks: Book[];
};

interface Library {
    books: Book[];
    members: Member[];

    addBook: (book: Book) => void;
    removeBook: (bookId: number) => void;
    updateBook: (bookId: number, book: Book) => void;

    addMember: (member: Member) => void;
    removeMember: (memberId: number) => void;
    updateMember: (memberId: number, member: Member) => void;

    borrowBook: (memberId: number, bookId: number) => void;
    returnBook: (memberId: number, bookId: number) => void;
};

class LibraryManagement implements Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    removeBook(bookId: number) {
        // this.books = this.books.splice(this.books.indexOf(this.books.find(book => book.id === bookId)), 1);
        this.books = this.books.filter(book => book.id !== bookId);
    }

    updateBook(bookId: number, book: Book) {
        // const index = this.books.findIndex(b => b.id === bookId);
        // if (index === -1) {
        //     console.log('Book not found');
        // } else {
        //     this.books[index] = book;
        // }

        this.books = this.books.map(b => b.id === bookId ? book : b);
    }

    addMember(member: Member) {
        this.members.push(member);
    }

    removeMember(memberId: number) {
        this.members = this.members.filter(member => member.id !== memberId);
    }

    updateMember(memberId: number, member: Member) {
        this.members = this.members.map(m => m.id === memberId ? member : m);
    }

    borrowBook(memberId: number, bookId: number) {
        // const index = this.books.findIndex(book => book.id === bookId);

        // if (index === -1) { 
        //     console.log('Book not found');
        // } else {
        //     const isExistBook = this.books[index].available;

        //     if (isExistBook) {
        //         const indexMember = this.members.findIndex(member => member.id === memberId);

        //         if (indexMember === -1) {
        //             console.log('Member not found');
        //         } else {
        //             this.members[indexMember].borrowedBooks.push(this.books[index]);
        //             this.books[index].available = false;
        //             console.log('Book borrowed successfully');
        //         }
        //     } else {
        //         console.log('Book is not available');
        //     }
        // }

        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (member && book && book.available) {
            member.borrowedBooks.push(book);
            book.available = false;
        }
    }

    returnBook(memberId: number, bookId: number) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (member && book) {
            member.borrowedBooks = member.borrowedBooks.filter(b => b.id !== bookId);
            book.available = true;
        }
    }
}

const library = new LibraryManagement();
const books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', available: true },
    { id: 2, title: 'Book 2', author: 'Author 2', available: true },
    { id: 3, title: 'Book 3', author: 'Author 3', available: true },
    { id: 4, title: 'Book 4', author: 'Author 4', available: true },
    { id: 5, title: 'Book 5', author: 'Author 5', available: true }
];
const members: Member[] = [
    { id: 1, name: 'Member 1', borrowedBooks: [] },
    { id: 2, name: 'Member 2', borrowedBooks: [] },
    { id: 3, name: 'Member 3', borrowedBooks: [] },
    { id: 4, name: 'Member 4', borrowedBooks: [] },
    { id: 5, name: 'Member 5', borrowedBooks: [] }
];

// Add books and members to the library
books.forEach(book => library.addBook(book));
members.forEach(member => library.addMember(member));

console.log('Books:', library.books);
console.log('====================');
console.log('Members:', library.members);

// Delete book
console.log('====================');
library.removeBook(3);
console.log('Books after deleting book 3:', library.books);

// Update book
console.log('====================');
library.updateBook(2, { id: 2, title: 'Book 2 Updated', author: 'Author 2 Updated', available: true });
console.log('Books after updating book 2:', library.books);
