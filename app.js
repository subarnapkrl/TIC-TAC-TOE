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
                alert("PLAYER1 MAKE YOUR MOVE:");
                gameBoardArray.push(playerArray[2]);
                console.log("SHOW ME THE CURRENT GAMEBOARD ARRAY......",gameBoardArray);
            }
            else if(gameBoardArray[gameBoardArray.length-1]=="X")
            {
                alert("PLAYER2 MAKE YOUR MOVE:");
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
            })
            gameBoardObject.makePlayerMove();
        }
        i++;
    })

    //STARTING THE GAME
    let startGameBtn=document.querySelector(".start-game-button");
    startGameBtn.addEventListener("click",createPlayer);

    return{};
    
})();


//This is PlayerInformation Factory Function
let playerObjectFunction=(playerName,playerNumber,assignmentXO)=>{
   
    
    return{
        playerName,playerNumber,assignmentXO
    };
};
