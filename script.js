let boxes = document.querySelectorAll(".box");
let win = document.querySelector("#winner");
let Audio = document.querySelector("#audio");
let winSound = document.querySelector("#win");
let reset = document.querySelector("#resetbutton");

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    

    if (turnO) {
      box.innerText = "O";
      Audio.play();
      // win.innerText = "Waiting for X turn....";
      box.disabled = true;
      turnO = false;
    } else {
      box.innerText = "X";
      Audio.play();
      // win.innerText = "Waiting for O turn....";
      box.disabled = true;
      turnO = true;
    }
    winner();
    draw();
  });
});

boxesdisable = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
function showwinner(Winner) {
  win.innerText = `Congratulation  Winner is ${Winner}`;
  setTimeout(() => {
    winSound.play();
  }, 100);
}

// draw = () => {
//     boxes.forEach((box) = () =>{
//       if(boxes.disabled){
//         win.innerText = `!Oops it's Draw Play again`;
//             }
//     })
// }

winner = () => {
  let winposition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (patterns of winposition) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);

        boxesdisable();
      }
    }
  }
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  win.innerText = "";
  turnO = true;
})