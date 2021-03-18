console.log("Implementing a library class");

class Library{

    constructor(bookList)
    {
        this.bookList=bookList;
        this.issuedBooks={};  //maintainng an object of books issued to each user
        
    }

    getBookList()
    {
        return this.bookList;
    }

    issueBook(bookname,user)
    {
        if(this.bookList.includes(bookname))
        {
            
            this.issuedBooks[bookname]=user;
            let ind=this.bookList.indexOf(bookname);   //once a book is issued it needs to be removed from the bookList
            this.bookList.splice(ind,1);
            console.log("~~~New book issued~~~")
            console.log("Remaining books " + this.bookList);
            console.log(this.issuedBooks);
            return `${bookname} has been issued to ${user}`;
        }
        else
        {
            return `Sorry ${user}, ${bookname} has been issued to another user`;
        }

    }

    returnBook(bookname)
    {
        delete this.issuedBooks[bookname];   //once the book is return, it needs to be removed from the issuedBooks 
        
        this.bookList.push(bookname);     //once the book is return, it needs to be added back to the bookList

        console.log(this.issuedBooks);
        return this.bookList;
    }
}

system= new Library(["A","B","C","D","E","F","G","H"]);
console.log(system);
console.log(system.bookList);
console.log(system.issueBook("A","anu"));
console.log(system.issueBook("D","singh"));
console.log(system.issueBook("H","harry"));
console.log(system.issueBook("G","rohan"));
console.log(system.issueBook("H","hari"));
console.log(system.returnBook("A"));
console.log(system.returnBook("H"));
console.log(system.issueBook("H","hari"));


