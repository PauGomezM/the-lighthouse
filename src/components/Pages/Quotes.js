import { useState } from "react";

function Quotes() {
    const [quoteTyped, setQuoteCreated] = useState('');
    const [quoteCreated, setStoreQuote] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (quoteTyped === '') {
            alert("You can't post empty content...")
        } else {
            setStoreQuote([...quoteCreated, quoteTyped]);
            setQuoteCreated('');
            console.log('yo');
        }

    };
    const handleChange = (event) => {
        setQuoteCreated(event.target.value);

    };

    const renderedQuotesReviews = quoteCreated.map((quote, index) => <p className="" key={index}>{quote}</p>);

    const maxCharacterCount = 100;
    
    return (
        <div className="bg-cyan-950 flex flex-col p-3">
            <form onSubmit={handleFormSubmit}>
                <input className="bg-cyan-900 p-1 w-full border rounded-md border-cyan-500" type="text" placeholder="Type your quote..." value={quoteTyped} onChange={handleChange} maxLength={maxCharacterCount} />
            </form>
            <div className="flex flex-row items-center justify-between p-1">
                <button className="px-2 py-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm" onClick={handleFormSubmit}>Add quote</button>
                <p>{maxCharacterCount - quoteTyped.length}</p>
            </div>
            <div className="">{renderedQuotesReviews}</div>
        </div>
    );
}
export default Quotes;