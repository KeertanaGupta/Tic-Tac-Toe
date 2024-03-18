let boxes = document.querySelectorAll("button");
// let newBtn = document.querySelector(".reset");
// let resetBtn = document.querySelector(".reset");
let turnO = true; // 2 players --> PlayerX, PlayerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    $("button").text("");
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            if (pos1Val === "O") {
                $("h1").text("Player O is Winner!!");
            } else {
                $("h1").text("Player X is Winner!!");
            }
            disableAllBoxes();
            return;
        }
    }

    // Check for a tie
    if (Array.from(boxes).every(box => box.disabled)) {
        $("h1").text("It's a Tie!!");
    }
};

const disableAllBoxes = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = true;
    }
};
$(".reset").click(()=>{
    resetGame();
    $("h1").text("Tic-Tac-Toe");
})