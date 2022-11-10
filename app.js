//This is GameBoard Module
let gameBoardObject=(function(){
    let gameBoardArray=[];
    return{gameBoardArray};
})();

//This is PlayerInformation Factory Function
let playerObjectFunction=(playerName,playerNumber,assignmentXO)=>{

    return{
        playerName,playerNumber,assignmentXO
    };
};

//This is GAME DISPLAY FLOW CONTROLLER Module
let displayFlowController=(function()
{
    return{};
})();

let player1=playerObjectFunction("Subarna",1,"X");
let player2=playerObjectFunction("Hetal",2,"O");