const { get } = require("lodash");
const { json } = require("stream/consumers");

const BASE_URL = "https://opentdb.com/api.php?amount=10"



            const form = document.querySelector("form");
            form.addEventListener("submit", (e) => {
                e.preventDefault();
            
                fetch(BASE_URL)
                .then(response => response.json())  
                .then(json => {
                    main.innerHTML= "";
                    json.results.forEach((result) => {
                        addQuestionCard(element)
                    })
            })  
            
            .catch(error => console.log(error));
            alert("An error has occurred, U will die now")
            })  
            
            const main = document.querySelector("main.centered")
            let addQuestionCard = (question) => {
                let h2 = document.createElement("h2");
                let article = document.createElement("article");
                let button = document.createElement("button");
                let firstParagraph = document.createElement("p");
                let secondParagraph = document.createElement("p");
            
                article.classList.add(".card");
                secondParagraph.classList.add("hide");
            
                switch (question.type) {
                    case "easy":
                        article.style.backgroundColor = "green";
                        break;
                    case "medium":
                        article.style.backgroundColor = "yellow";       
                        break;
                    case "hard":
                        article.style.backgroundColor = "red";
                        break;  
                    default:
                        break;
                }
            
                
            let showAnswer= document.querySelector(".show-answer)"
                showAnswer.addEventListener("click" , (event) =>{
                    event.preventDefault();
                fetch ("https://opentdb.com/api.php?amount=10" ) 
                
                .then(response) => response.json());
                    response.result.forEach((result) =>{
                        functionName(result)
                    })
            
                .catch(functionName);
                })