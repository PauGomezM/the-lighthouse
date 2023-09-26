import React, { useState } from "react";
import axios from "axios";
import AddBookReview from "./BookReviews/AddBookReview";

function AboutBooks() {
    const [bookName, setBookTerm] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=5`)
            .then(response => {
                const items = response.data.items;
                if (items) {
                    setBooks(items);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleBookTermChange = (event) => {
        setBookTerm(event.target.value);
    }

    return (
        <div className="bg-cyan-950 flex flex-col p-3 max-w-full">
            <div className="">
                <input className="bg-cyan-900 p-1 w-full border rounded-md border-cyan-500" placeholder="Search a book review..." value={bookName} onChange={handleBookTermChange} />
                <div className="flex justify-between">
                    <button className="px-2 py-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm mt-2" onClick={searchBooks}>Search</button>
                    <button className="px-2 py-1 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm mt-2">Add book review</button>
                </div>
            </div>
            <div className="">
                {books.map((book) => (
                    <div key={book.id} className="bg-cyan-800 flex flex-col w-full border border-cyan-300 p-2 rounded-md mt-3">
                        <img className="w-20 h-auto" src={book.volumeInfo.imageLinks?.thumbnail} alt={`Thumbnail for ${book.volumeInfo.title}`} />
                        <h3 className=" text-cyan-100">{book.volumeInfo.title}</h3>
                        <p className=" text-cyan-100">Author: {book.volumeInfo.authors}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutBooks;


