//This is GameBoard Module
let gameBoardObject=(function(){
    let gameBoardArray=["X"];
    return{gameBoardArray};
})();

//This is PlayerInformation Factory Function
let playerObjectFunction=(playerName,playerNumber,assignmentXO)=>{
   
    
    return{
        playerName,playerNumber,assignmentXO
    };
};




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
                    gbox.textContent=gameBoardObject.gameBoardArray[gameBoardObject.gameBoardArray-1];

                    console.log("SHOW ME MY MAKEMOVES LINKED NODE VALUE........",makeMoves.dataset.linkedButton);
                    console.log("SHOW ME MY MAKEMOVES LINKED BUTTON VALUE........",gbox.dataset.linkedButton);

                }
                i++;
            })
            i++;
        }
    })
    
})();

let player1=playerObjectFunction("Subarna",1,"X");
let player2=playerObjectFunction("Hetal",2,"O");
renderArrayToScreen;