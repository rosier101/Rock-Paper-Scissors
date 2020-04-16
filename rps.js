let yourOption = null;
        let aiOption = null;
        let yourScore = 0;
        let aiScore = 0;

        const resultContainer = document.querySelector("#result-container");
        const btn = document.querySelectorAll(".btn");
        const finalResult = document.querySelector("#final-result");
        let yourScoreBtn = document.querySelector("#your-score");
        let aiScoreBtn = document.querySelector("#ai-score");

        const options = ["Rock", "Paper", "Scissors"];
        
        //choosing your option. Rock, paper, or scissor through each round
        for (let i = 0; i< btn.length ; i++){
            btn[i].addEventListener("click", function(){
                yourOption = btn[i].textContent; //sets or returns the text content. Will show in showYourOption() methods
                playRound();
            });
        };

        function playRound() { //keep playing until 3 rounds
            if (yourScore >= 3 || aiScore >= 3){
                return;
            }
          //calling all functions. Just like java
            clear();
            getAiOption();
            showYourOption();
            showAiOption();
            showWinner();
            updateScore();
            checkGameWinner();

        }
       //this will clear all scores and results when reset button is clicked on
        function clear(){
            let p = document.querySelectorAll("p");
            for (let i = 0; i < p.length ; i++){
                p[i].remove();
            }
        }
        
        //this will create texts whenever called on
       function createNode(str, node = resultContainer){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(str));
            node.appendChild(p);
        }
        
        //ai will randomly choose option
        function getAiOption(){
            aiOption = options[Math.floor(Math.random() * 3)];
        }

        function showYourOption (){
            createNode ("My choice: " + yourOption );
        }

        function showAiOption(){
            createNode ("Computers's choice: " + aiOption);
        }

 
          //checking winner for each round
          function checkWinner(){
            if (aiOption === yourOption){
                return "draw";
            }
            
         else if((aiOption === "Rock" && yourOption === "Scissors") || (aiOption === "Scissors" && yourOption === "Paper") || (aiOption === "Paper" && yourOption === "Rock")){
               return "ai"; 
            }
            
        else if ((yourOption === "Rock" && aiOption === "Scissors") || (yourOption === "Scissors" && aiOption === "Paper") || (yourOption === "Paper" && aiOption === "Rock")){
               return "your";
            }
        }

        function showWinner(){
            if (checkWinner() === "draw"){
                createNode("Result: Draw");
            }
            else if (checkWinner() === "ai"){
                aiScore += 1;
                createNode("Result: You lost");
            }
            else if (checkWinner() === "your"){
                yourScore += 1;
                createNode("Result: You won");
            }
        }

          function checkGameWinner() {
            if (yourScore === 3){
                createNode("Congrats! You won!", finalResult);
                createResetBtn();
            }
            else if (aiScore === 3) {
                createNode("Sorry, you lost!", finalResult)
                createResetBtn();
            }
        }

        function updateScore(){
            yourScoreBtn.innerHTML = yourScore;
            aiScoreBtn.innerHTML = aiScore;
        }


        function createResetBtn() {
            let b = document.createElement("button");
            b.appendChild(document.createTextNode("Restart Game"));
            b.classList.add("btn-hover");
            finalResult.appendChild(b);
            b.addEventListener("click", function(){
                clear();
                yourScore = 0;
                aiScore = 0;
                updateScore();
                b.remove();
            });
        }
