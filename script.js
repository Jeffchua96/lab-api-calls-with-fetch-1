
const form = document.querySelector("form");
const main = document.querySelector("main")
const BASE_URL = "https://opentdb.com/api.php?amount=10"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    main.innerHTML = "";
   
    fetch(BASE_URL).then(response => response.json())   
    .then((json) => {
        json.results.forEach((result) => {
            addQuestionCard(result);
        })
    })  
    .catch(displayError)
})

    function addQuestionCard(result) {  
        const header= document.createElement("h2");
        header.textContent = result.category;
        
        const p = document.createElement("p");
        p.textContent = result.question;

        const button = document.createElement("button");    
        button.textContent = "Show Answer";

        const answer = document.createElement("p");
        answer.textContent.add("hidden");
        answer.textContent = result.correct_answer; 

        const article = document.createElement("article");
        article.className= "card"
        article.append(header, p, button, answer);
        main.append(article);

        button.addEventListener("click", (e) => {
            answer.classList.remove("hidden");
        })
    }   

function displayError(error) {
    const header = document.createElement("h2");
    header.textContent = "error";

    const p = document.createElement("p");
    p.textContent = error.message;

    const article = document.createElement("article");  
    article.classList.add("card");
    article.append(header, p);
    main.append(article);
}   
        