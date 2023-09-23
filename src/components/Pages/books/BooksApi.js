import axios from "axios";

const searchBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms
    `)
    .then(response => {
        console.log(response.data.items);
    });
}

export default searchBooks;