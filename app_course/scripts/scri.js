document.querySelectorAll(".moja").forEach(button=>{button.addEventListener("click",
  ()=>{ const pachi=button.getAttribute("status");
    playgame(pachi);  
  }
)});
document.body.addEventListener("keydown",(event)=>{
  if (event.key==="r") {
    playgame("rock"); 
  }
  else if(event.key==="p"){
    playgame("paper");
  }
  else if(event.key==="s"){
    playgame("scissors");
  }

})

function compMove() {
  const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}
  return computerMove
}
let score= JSON.parse(localStorage.getItem('score'));
if (!score) {
  score= {Win:0 ,Lose:0 ,tie:0 };
}
let tonata;
let leyo=false;
function autoPlay() {
  if (!leyo) {
    tonata=setInterval(function () {
      const player=compMove();
      playgame(player);
    },1000);
    leyo=true;
  } else{
    clearInterval(tonata);
    leyo=false;

  }

  
}
  


function playgame(tamu) {
const computerMove= compMove();
let result = '';
if (tamu==='rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  };
  
} if (tamu==='paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  };
} else if(tamu==='scissors'){
    if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  };
};
if (tamu==='scissors'&&computerMove === 'paper'||
tamu==='paper'&&computerMove === 'rock'||tamu==='rock'&&computerMove === 'scissors') {
  score.Win+=1;
  
  
} else if (tamu==='scissors'&&computerMove === 'rock'||
tamu==='paper'&&computerMove === 'scissors'||tamu==='rock'&&computerMove === 'paper'){
  score.Lose+=1;
  
} else if (tamu==='scissors'&&computerMove === 'scissors'||
tamu==='paper'&&computerMove === 'paper'||tamu==='rock'&&computerMove === 'rock'){
  score.tie+=1;
  
};

localStorage.setItem('score',JSON.stringify(score));
const total=score.Win+score.Lose+score.tie;
document.querySelector(".manu").innerHTML=`You picked <img src="scripts/${tamu}-emoji.png" class="emoji">. Computer picked <img src="scripts/${computerMove}-emoji.png" class="emoji"> .`; 
document.querySelector(".danu").innerHTML=` win:${score.Win}, lose:${score.Lose}, tie:${score.tie}`;
document.querySelector(".man").innerHTML=result;
document.querySelector(".dano").innerHTML=`the Total of scores is :${total}`;
 
}

