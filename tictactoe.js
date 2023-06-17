let playerSymbol = "X";
let gameEnded = false

let winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
      if (this.innerHTML === "" && !gameEnded) {
        this.innerHTML = playerSymbol;
        
        checkWin();
        if(playerSymbol === "X"){
          playerSymbol = "O"
          this.classList.add('p1');
          
        }else{
          playerSymbol = "X";
          this.classList.add('p2');
        }
      }
    }
  );
}

res = document.querySelector(".playerOne");
res2 = document.querySelector(".playerTwo");

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
	if (
	  document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][2]).innerHTML === playerSymbol
	) {
	  document.getElementById(winPos[i][0]).classList.add("win");
	  document.getElementById(winPos[i][1]).classList.add("win");
	  document.getElementById(winPos[i][2]).classList.add("win"); 
    
	  gameEnded = true;
	  setTimeout(function() {
      if(playerSymbol =="O"){
        res.classList.add('show');
      }else{
        res2.classList.add('show');
      }
	   
	  }, 500);
	}
  }
}

  function reset() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      gameEnded = false;
      res.classList.remove("show");
      res2.classList.remove("show");
    }
  }