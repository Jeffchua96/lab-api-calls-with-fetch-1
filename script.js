HTML

const BASE_URL = "https://opentdb.com/api.php?amount=10"



            const form = document.querySelector("form");
            form.addEventListener("submit", (e) => {
                e.preventDefault();
            
                fetch(BASE_URL)
                .then(response => response.json())  
                .then(json => {
                    console.log(json))

                    main.innerHTML= "";
                    json.results.forEach((element) => {
                        addQuestionCard(element)
                    })
            })  
            
            .catch(error => {
            console.log(error)
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
                secondParagraph.classList.add("hidden");
            
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
            
                h2.innerText = question.category;
                firstParagraph.innerText = question.question;
                button.innerText = ("Show Answer")
                secondParagraph.innerText = question.correct_answer

                main.append(article);
                article.append(h2);
                article.append(firstParagraph);
                article.append(button);
                article.append(secondParagraph);    

                button.addEventListener("click", () => {
                    secondParagraph.classList.toggle("hidden"); 
                })  
            }
            let showAnswer= document.querySelector(".Show-Answer)"
    showAnswer.addEventListener("click" , (event) =>{
        event.preventDefault();
    fetch ("https://opentdb.com/api.php?amount=10" ) 
    
    .then(response) => response.json());
        response.result.forEach((result) =>{
            functionName(result)
        })

    .catch(functionName);
    })
