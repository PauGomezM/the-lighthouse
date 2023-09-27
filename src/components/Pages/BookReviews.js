import React, { useState } from 'react';
import AddBookReview from './BookReviews/AddBookReview'; 

function BookReviews() {
    const [isAddingReview, setIsAddingReview] = useState(false);

    const toggleAddingReview = () => {
        setIsAddingReview(true); 
    }

    return (
        <div className="bg-cyan-950 flex flex-col p-3 max-w-full">
            <div className="">
                <input className="bg-cyan-900 p-1 w-full border rounded-md border-cyan-500" placeholder="Search a book review..." />
                <div className="flex justify-between">
                    <button className="px-2 py-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm mt-2">Search</button>
                    <button className="px-2 py-1 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm mt-2" onClick={toggleAddingReview}>Add book review</button>
                </div>
                {isAddingReview && <AddBookReview />}
            </div>
            
        </div>
    );
}

export default BookReviews;


