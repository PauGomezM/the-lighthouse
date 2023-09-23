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

    const renderedQuotesReviews = quoteCreated.map((quote, index) => <p className="quotes-created" key={index}>{quote}</p>);

    const maxCharacterCount = 100;
    
    return (
        <div className="quotes-content">
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Type your quote..." value={quoteTyped} onChange={handleChange} maxLength={maxCharacterCount} />
            </form>
            <div className="quotes-submit">
                <button onClick={handleFormSubmit}>Add quote</button>
                <p>{maxCharacterCount - quoteTyped.length}</p>
            </div>
            <div className="quotes-created">{renderedQuotesReviews}</div>
        </div>
    );
}
export default Quotes;