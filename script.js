const quoteTextElement = document.getElementById("quote-text")
const authorNameElement = document.getElementById("author-name")
const quoteSelector = document.getElementById("quote-selector")
const displayQuoteButton = document.getElementById("btn")
const displayQuoteContainer = document.getElementById("quote-container")
const arrayQuotes = [

    //this is motivationl

    { Text: "Believe that you can and you're halfway there", author: "Theodore Roosevelt" },
    { Text: "Without a sense of urgency,desire loses its value", author: "Jim Rohn" },
    { Text: "Success is not final, failure is not fatal", author: "Winston Churchill" },
    { Text: "Have faith, have faith, when you have nothing else have faith", author: "Francine Rivers" },
    { Text: "The soil says, don't bring me your need. Bring me your seed", author: "Jim Rohn" },


    //love and relationships

    { Text: "To love is nothing. To be loved is something. But to love and be loved is everything", author: "T. Tolis" },
    { Text: "I have decided to stick to love; hate is too great a burden to bear", author: "Martin Luther King Jr" },
    { Text: "The walls we build around us to keep out the sadness, also keeps out the joy", author: "Jim Rohn" },
    { Text: "All of me loves all of you", author: "John Legend" },


    //wisdom and life

    { Text: "Always do your best. What you plant now, you will harvest later", author: "Og Mandino" },
    { Text: "You will face many defeats in life, but never let yourself be defeated", author: "Maya Angelou" },
    { Text: "The future belongs to those who prepare for it today", author: "Malcolm X" },
    { Text: "The great gift of the human imagination is that it has no limits or ending", author: "Jim Rohn." },


    //Humorous

    { Text: "The great gift of the human imagination is that it has no limits or ending", author: "W.C Fields" },
    { Text: "I drink to make other people more interesting", author: "Ernest Hemingway" },
    { Text: "As you get older, three things happen. The first is your memory goes, and I can't remember the other two", author: "Sir Norman Wisdom" },
    { Text: "The best way to appreciate your job is to imagine yourself without  one", author: "Oscar Wilde" },


];

function populateQuotes() {
    quoteSelector.innerHTML = "";

    arrayQuotes.forEach((quote, index) => {
        const optgroup = document.createElement("optgroup");
        const option = document.createElement("option");
        option.value = index;
        option.text = quote.Text;
       
        switch (index) {
            case 0:
                optgroup.label = "Motivational";
                quoteSelector.add(optgroup);
            // break;   
            case 1:
            case 2:
            case 3:
            case 4:

                // quoteSelector.add(optgroup);
                quoteSelector.add(option);
                break;

            case 5:
          
                optgroup.label = "Love and Relationship";
                quoteSelector.add(optgroup);
              
            case 6:
            case 7:
            case 8:

               
                quoteSelector.add(option);
                break;

            case 9:
          
                optgroup.label = "Wisdom and Life";
                quoteSelector.add(optgroup);
           
            case 10:
            case 11:
            case 12:

             
                quoteSelector.add(option);
                break;
            case 13:
          
                optgroup.label = "Hummorous";
                quoteSelector.add(optgroup);
               
            case 14:
            case 15:
            case 16:

              
                quoteSelector.add(option);
                break;

        }
    });

};
populateQuotes();


function displaySelectedQuote() {

    const selectedIndex = quoteSelector.value;

    const selectedQuote = arrayQuotes[selectedIndex];


    if (selectedIndex >= 0 && selectedIndex < arrayQuotes.length) {

        quoteTextElement.textContent = selectedQuote.Text;
        authorNameElement.textContent = selectedQuote.author;
    } else {
        alert("Invalid selection");
    }

}

displayQuoteButton.addEventListener("click", displaySelectedQuote);






