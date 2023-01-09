let createPlayer=()=>{
    //WE HAVE TO LOOP 4 TIMES BECOZ ONE FOR PLAYER1 (REAL INPUT AS WELL BLANK INPUT) & ANOTHER ONE FOR PLAYER2 (REAL INPUT AS WELL BLANK INPUT)

    for(let i=0;i<4;i++)
    {
        //GREATER THAN 6 BECOZ PLAYER1(NAME,ASSIGNED-NUMBER,ASSIGNED-SIGN) & PLAYER2(NAME,ASSIGNED-NUMBER,ASSIGNED-SIGN)

        if(gameBoardObject.playerArray.length>=6)
        {
            gameBoardObject.makePlayerMove();
            //DON'T HAVE TO LOOP AGAIN
            break;
        }
        else if(gameBoardObject.playerArray.length==0)
        {
            let playerName=prompt("ENTER PLAYER1 NAME:");

            if(playerName=="" || playerName==null)
            {
                alert("Sorry! Name cannot be blank! TRY AGAIN");
                //HAVE TO LOOP AGAIN FROM THE TOP
                continue;
            }

            let playerNumber=1;
            let playerAssigned="X";

            alert("You are PLAYER1 and your assigned letter is X");

            gameBoardObject.playerArray.push(playerName,playerNumber,playerAssigned);

            console.log("PlayerArray has:.......",gameBoardObject.playerArray);


        }
        else if(gameBoardObject.playerArray.length!=0)
        {
            let playerName=prompt("ENTER PLAYER2 NAME:");

            if(playerName=="" || playerName==null)
            {
                alert("Sorry! Name cannot be blank! TRY AGAIN");
                //HAVE TO LOOP AGAIN FROM THE TOP
                continue;
            }

            let playerNumber=2;
            let playerAssigned="O";

            alert("You are PLAYER1 and your assigned letter is X");

            gameBoardObject.playerArray.push(playerName,playerNumber,playerAssigned);

            console.log("PlayerArray has:.......",gameBoardObject.playerArray);


        }
    }
}

//This is GameBoard Module
let gameBoardObject=(function(){
    let gameBoardArray=[];
    let playerArray=[];

    let makePlayerMove=()=>{
        if(playerArray.length==6 && gameBoardArray.length<9)
        {
            //PLAYER MOVES
            if(gameBoardArray.length==0)
            {
                alert(gameBoardObject.playerArray[0]+" MAKE YOUR MOVE:");
                gameBoardArray.push(playerArray[2]);
                console.log("SHOW ME THE CURRENT GAMEBOARD ARRAY......",gameBoardArray);
            }
            else if(gameBoardArray[gameBoardArray.length-1]=="X")
            {
                alert(gameBoardObject.playerArray[3]+" MAKE YOUR MOVE:");
                gameBoardArray.push(playerArray[5]);
                console.log("SHOW ME THE CURRENT GAMEBOARD ARRAY......",gameBoardArray);
                
            }
            else if(gameBoardArray[gameBoardArray.length-1]=="O")
            {
                alert("PLAYER1 MAKE YOUR MOVE:");
                gameBoardArray.push(playerArray[2]);
                console.log("SHOW ME THE CURRENT GAMEBOARD ARRAY......",gameBoardArray);
            }
        }
    }
    return{gameBoardArray,playerArray,makePlayerMove};
})();





//This is GAME DISPLAY FLOW CONTROLLER Module
let displayFlowControllerModule=(function()
{
    const makeMove=document.querySelectorAll(".game-board-button");

    //INDEXING & LOOPING THROUGH EACH NODES
    let i=0;
    makeMove.forEach(makeMoves=>{
        makeMoves.dataset.linkedButton=i;
        makeMoves.addEventListener("click",renderArray);

        function renderArray()
        {
            const gridBoxes=document.querySelectorAll(".grid-box");

            //INDEXING & LOOPING THROUGH EACH GRID BOXES
            let i=0;
            gridBoxes.forEach(gbox=>{
                gbox.dataset.linkedButton=i;

                //RENDER CLICKED PLAY ON THE GRIDBOX & DISPLAY

                if(gbox.getAttribute("data-linked-button")==makeMoves.getAttribute("data-linked-button"))
                {
                    gbox.textContent=gameBoardObject.gameBoardArray[gameBoardObject.gameBoardArray.length-1];

                    console.log("SHOW ME MY MAKEMOVES LINKED NODE VALUE........",makeMoves.dataset.linkedButton);
                    console.log("SHOW ME MY MAKEMOVES LINKED BUTTON VALUE........",gbox.dataset.linkedButton);

                }
                i++;
            });

            //CHECKING FOR WIN
            function checkWinner(playerSign)
            {
                let horizontal=[0,3,6].map(i=>{
                    return [i,i+1,i+2]
                });
                let vertical=[0,1,2].map(i=>{
                    return [i,i+3,i+6]
                });

                let diagonal=[[0,4,8],[2,4,6]];

                let allWIns=[].concat(horizontal).concat(vertical).concat(diagonal);

                let results=allWIns.some(indices=>{
                    return gridBoxes[indices[0]].textContent==playerSign && gridBoxes[indices[1]].textContent==playerSign &&gridBoxes[indices[2]].textContent==playerSign 

                })
                return results;
            }

            if(checkWinner("X")==true)
            {
                console.log(gameBoardObject.playerArray[0]," WINS!");
                let body=document.querySelector(".heading");
                let playerWinMsg=document.createElement("h1");
                playerWinMsg.classList.add("win");
                playerWinMsg.textContent=(gameBoardObject.playerArray[0]+" WINS!")
                body.appendChild(playerWinMsg);

                makeMove.forEach(makeMoves=>{
                    makeMoves.remove();
                })
                startGameBtn.remove();
                return;
            }
            else if(checkWinner("O")==true)
            {
                console.log(gameBoardObject.playerArray[3]," WINS!");
                let body=document.querySelector(".heading");
                let playerWinMsg=document.createElement("h1");
                playerWinMsg.classList.add("win");
                playerWinMsg.textContent=(gameBoardObject.playerArray[3]+" WINS!")
                body.appendChild(playerWinMsg);

                makeMove.forEach(makeMoves=>{
                    makeMoves.remove();
                })
                startGameBtn.remove();
                return;
            }
            else if(gameBoardObject.gameBoardArray.length==9)
            {
                console.log("TIE!");
                let body=document.querySelector(".heading");
                let playerWinMsg=document.createElement("h1");
                playerWinMsg.classList.add("win");
                playerWinMsg.textContent=("TIE!");
                body.appendChild(playerWinMsg);

                makeMove.forEach(makeMoves=>{
                    makeMoves.remove();
                })
                startGameBtn.remove();
                return;
            }
            gameBoardObject.makePlayerMove();
        }
        i++;
    })

    //STARTING THE GAME
    let startGameBtn=document.querySelector(".start-game-button");
    startGameBtn.addEventListener("click",createPlayer);

    let restartGameBtn=document.querySelector(".clear-game-button");
    restartGameBtn.addEventListener("click",function()
    {
        location.reload();
    })

    return{};
    
})();


//This is PlayerInformation Factory Function
// let playerObjectFunction=(playerName,playerNumber,assignmentXO)=>{
   
    
//     return{
//         playerName,playerNumber,assignmentXO
//     };
// };

/*
VERY SIMPLE WAY:--


let currentTurn='X';
let newArrray=Array(9).fill(null);


function handleClickEvent(element)
{
    let clickedId=element.id;
    if(newArrray[clickedId]!=null) return;

    newArrray[clickedId]=currentTurn;
   

    element.innerText=currentTurn;
    checkWinner();

    currentTurn=currentTurn==="X"?"O":"X";

}

function checkWinner()
{
    if(
            ( newArrray[0]!=null && newArrray[0]==newArrray[1] && newArrray[1]==newArrray[2]) ||
            (newArrray[3]!=null && newArrray[3]==newArrray[4] && newArrray[4]==newArrray[5]) ||
            (newArrray[6]!=null && newArrray[6]==newArrray[7] && newArrray[7]==newArrray[8]) ||
            (newArrray[0]!=null && newArrray[0]==newArrray[3] && newArrray[3]==newArrray[6]) ||
            (newArrray[1]!=null && newArrray[1]==newArrray[4] && newArrray[4]==newArrray[7]) ||
            (newArrray[2]!=null && newArrray[2]==newArrray[5] && newArrray[5]==newArrray[8]) ||
            (newArrray[0]!=null && newArrray[0]==newArrray[4] && newArrray[4]==newArrray[8]) ||
            (newArrray[2]!=null && newArrray[2]==newArrray[4] && newArrray[4]==newArrray[6])
    )
            {
                console.log(currentTurn);
                document.write(`WINNER IZ : ${currentTurn}`);
                return;
            }
    if(!newArrray.some(el=>el==null)) {
        document.write(`DRAW!!!`)
    }

}

*/
