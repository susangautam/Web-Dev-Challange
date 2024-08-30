const text = document.getElementById("quote");
const authorElement = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {
    const url = "https://type.fit/api/quotes";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok.');
        
        const allQuotes = await response.json();
        const indx = Math.floor(Math.random() * allQuotes.length);
        const quote = allQuotes[indx].text;
        const author = allQuotes[indx].author || "Anonymous";

        text.innerHTML = `"${quote}"`;
        authorElement.innerHTML = `~ ${author}`;

        tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} ~ ${encodeURIComponent(author)}`;
    } catch (error) {
        text.innerHTML = "Sorry, something went wrong.";
        authorElement.innerHTML = "";
        console.error('Error fetching the quote:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getNewQuote();
    document.querySelector('.next').addEventListener('click', getNewQuote);
});
