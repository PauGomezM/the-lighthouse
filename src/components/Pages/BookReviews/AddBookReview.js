import axios from "axios";
import React, { useState } from "react";

function AddBookReview() {
    const [bookName, setBookTerm] = useState('');
    const [books, setBooks] = useState([]);

    const searchBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=10`)
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
        <div className="modal-blur">
            <div className="modal bg-cyan-950 border-2 border-green-500 rounded-md">
                <div className="w-full flex flex-col">
                    <input className="bg-cyan-900 p-1 border rounded-md border-cyan-500" placeholder="Search a book review..." value={bookName} onChange={handleBookTermChange} />
                    <div className="flex justify-between">
                        <button className="px-2 py-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm mt-2" onClick={searchBooks}>Search</button>
                    </div>
                </div>
                <div className="scrollable-section mt-3 mb-3">
                    {books.map((book) => (
                        <div key={book.id} className="bg-cyan-800 flex border border-cyan-300 p-2 rounded-md m-3">
                            <img className="w-10 h-auto mr-3" src={book.volumeInfo.imageLinks?.thumbnail} alt={`Thumbnail for ${book.volumeInfo.title}`} />
                            <div>
                                <h3 className="text-gray-200 font-bold">{book.volumeInfo.title}</h3>
                                <p className="text-cyan-100 text-xs"><span className=" font-bold">Author: </span>{book.volumeInfo.authors}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <textarea type="text" placeholder="Write your review..." className="w-full p-2 max-h-32 border rounded-lg border-cyan-300 bg-cyan-200 text-cyan-950"></textarea>
                </div>
            </div>
        </div>
    );
}

export default AddBookReview;
