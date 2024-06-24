let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game  is start");
        started = true;

        levelUp();
    }
});

function gameflashUp(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
function userflashUp(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp() {
    userseq = []
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    gameflashUp(randombtn);

}

function checkAns(idx) {

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b> ${level} <b> <br> press any key to start again  `;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userflashUp(btn);

    let userCOlor = btn.getAttribute("id");
    userseq.push(userCOlor);
    checkAns(userseq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for (bttns of allBtns) {
    bttns.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}