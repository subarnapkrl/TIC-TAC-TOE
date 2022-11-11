//This is GameBoard Module
let gameBoardObject=(function(){
    let gameBoardArray=["O"];
    return{gameBoardArray};
})();

//This is PlayerInformation Factory Function
let playerObjectFunction=(playerName,playerNumber,assignmentXO)=>{
   
    
    return{
        playerName,playerNumber,assignmentXO
    };
};

//This is function for rendering array to the SCREEN
let renderArrayToScreen=(function()
{
    let gridBoxes=document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent=gameBoardObject.gameBoardArray;
    

    console.log("Show the array as seen inside gameboardobject",gameBoardObject);
    console.log("Show the nodelist of the gameobject ",gameBoardObject.gameBoardArray);

    return{}

})();

//This is GAME DISPLAY FLOW CONTROLLER Module
let displayFlowController=(function()
{
    return{};
})();

let player1=playerObjectFunction("Subarna",1,"X");
let player2=playerObjectFunction("Hetal",2,"O");
renderArrayToScreen;