let currCatTile;
let currPoopTile;
let score = 0;
let gameOver = false;




window.onload = function(){
    setGame();
}
function setGame(){
    /* set up the grid*/
    for(let i=0;i<9;i++){
        let tile = document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setCat, 600);
    setInterval(setPoop,600);


}
function getRandomTile(){
   let num = Math.floor(Math.random() *9);
   return num.toString();

}
function setCat(){
    if(gameOver){
        return;
    }
    if(currCatTile){
        currCatTile.innerHTML = "";
    }
    let cat = document.createElement("img");
    cat.src="./cat.png";

    let num =getRandomTile();
    if(currPoopTile && currPoopTile.id==num){
        return;

    }
    currCatTile = document.getElementById(num);
    currCatTile.appendChild(cat);
}
function setPoop(){
    if (gameOver){
        return;
    }
    if (currPoopTile){
        currPoopTile.innerHTML="";
    }
    let poop = document.createElement("img");
    poop.src="./poop.png";

     let num = getRandomTile();
     if (currCatTile && currCatTile.id==num){
        return;
     }
    currPoopTile = document.getElementById(num); 
    currPoopTile.appendChild(poop);


}




function selectTile() {
    if(gameOver){
        return;
    }
  if (this==currCatTile)  {
    score +=10;
    document.getElementById("score").innerText = score.toString();
  }
  else if(this==currPoopTile){
    document.getElementById("score").innerText = "GAME OVER: "+score.toString();
    gameOver=true;
  }

}