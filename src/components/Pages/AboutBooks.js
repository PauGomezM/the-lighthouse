import React, { useState } from "react";
import axios from "axios";

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
        <div>
            <div className="about-books-content">
                <div className="search-and-edit">
                    <input placeholder="Search a book review..." value={bookName} onChange={handleBookTermChange} />
                    <button onClick={searchBooks}>Search</button>
                </div>
                <div className="book-list">
                    {books.map((book) => (
                        <div key={book.id} className="book-item">
                            <h3>{book.volumeInfo.title}</h3>
                            <p>Author: {book.volumeInfo.authors}</p>
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={`Thumbnail for ${book.volumeInfo.title}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutBooks;


