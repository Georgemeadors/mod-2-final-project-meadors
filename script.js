const quoteTextElement = document.getElementById("quote-text")
const authorNameElement = document.getElementById("author-name")
const quoteSelector = document.getElementById("quote-selector")
const displayQuoteButton = document.getElementById("btn")
const displayQuoteContainer = document.getElementById("quote-container")
const arrayQuotes = [

    {Text: "Never begin the day until it is finished on paper", author: "John Mayer"},
    {Text: "When the promise is clear,the price gets easy", author: "Jim Robin"},
    {Text: "Reasons come first. Answers come second", author: "Tony Robbins"},
    {Text: "Part of success is preparation", author: "Benjamin Franklin"},

];

 function displaySelectedQuote() {
    const selectedIndex= quoteSelector.value;
    const selectedQuote = arrayQuotes[selectedIndex];

    if (selectedIndex >= 0 && selectedIndex < arrayQuotes.length) {
        
  console.log(selectedQuote)
        quoteTextElement.textContent = selectedIndex.Text
        quoteTextElement.textContent = `${selectedQuote.Text} - ${selectedQuote.author}`;
       displayQuoteContainer.appendChild(quoteTextElement)
    } else {
        alert("Invalid selection");
    }

}

displayQuoteButton.addEventListener("click", displaySelectedQuote);

displaySelectedQuote();
