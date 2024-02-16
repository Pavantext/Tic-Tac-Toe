let btn = document.querySelectorAll(".btn");
let rstbtn = document.querySelector(".rst-btn");
let rstbtn2 = document.querySelector("#rst-btn2");
let msgcont = document.querySelector(".msgcont");
let msg = document.querySelector(".msg");

let turn = true;
let count = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
btn.forEach((bt) => {
    bt.addEventListener("click", () =>{
    if(turn){
        bt.innerText = "O";
        turn = false;
    } else {
         bt.innerText = "X";
         turn = true;   
    }
    bt.disabled=true;
    count++;

    let isWinner = checkWinner();

    if(count === 9 && !isWinner) {
        gameDraw();
    }
    });
});

const disablebtns = () => {
    for (bt of btn) {
        bt.disabled=true;
    }
};
const enablebtns = () => {
    for(bt of btn) {
        bt.disabled = false;
        bt.innerText = "";
    }
}
const gameDraw = () => {
    msg.innerText = `game Draw`;
    msgcont.classList.remove("hid");
    disablebtns();
}

const showWinner = (winner) =>{
    msg.innerText = `Congrations, Winner is ${winner}`;
    msgcont.classList.remove("hid");
    disablebtns();
}
rstbtn.addEventListener("click", () => {
    turn = true;
    count = 0;
    enablebtns();
    msgcont.classList.add("hid");
});
rstbtn2.addEventListener("click", () => {
    for(bt of btn) {
        bt.innerText = "";
        bt.disabled = false;
        msgcont.classList.add("hid");
    }
});

checkWinner = () => {
    for (let pattern of winpatterns) {
        let p1 = btn[pattern[0]].innerText;
        let p2 = btn[pattern[1]].innerText;
        let p3 = btn[pattern[2]].innerText;
        if  (p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log("winner is",p1);
                showWinner(p1);
                return true;
            }
        }
    }
}