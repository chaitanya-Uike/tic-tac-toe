let cards = document.getElementsByClassName("grid-tile");

let instruction = document.getElementById("alerts");

let box1 = document.getElementById("b1");
let box2 = document.getElementById("b2");
let box3 = document.getElementById("b3");
let box4 = document.getElementById("b4");
let box5 = document.getElementById("b5");
let box6 = document.getElementById("b6");
let box7 = document.getElementById("b7");
let box8 = document.getElementById("b8");
let box9 = document.getElementById("b9");

let flag = true;
let count = 0;
let won;

let p1 = 0, p2 = 0;

function resetBoard() {
    count = 0;
    flag = true;
    won = false;
    document.getElementById("alerts").innerText = "It's Player 1's Turn";
    Array.from(cards).forEach(function (element) {
        element.innerText = null;
    })
}

function check() {
    let char;
    won = false;
    if (flag)
        char = "O";
    else
        char = "X";

    // horizontal check
    if (box1.innerText == char && box2.innerText == char && box3.innerText == char)
        won = true;
    else if (box4.innerText == char && box5.innerText == char && box6.innerText == char)
        won = true;
    else if (box7.innerText == char && box8.innerText == char && box9.innerText == char)
        won = true;

    // vertical check
    else if (box1.innerText == char && box4.innerText == char && box7.innerText == char)
        won = true;
    else if (box2.innerText == char && box5.innerText == char && box8.innerText == char)
        won = true;
    else if (box3.innerText == char && box6.innerText == char && box9.innerText == char)
        won = true;

    // diagonal check
    else if (box1.innerText == char && box5.innerText == char && box9.innerText == char)
        won = true;
    else if (box3.innerText == char && box5.innerText == char && box7.innerText == char)
        won = true;

    if (won) {
        if (flag) {
            instruction.innerText = "Player 2 won !";
            p2++;
            document.getElementById("scores").innerText = `${p1} / ${p2}`;
        }
        else {
            instruction.innerText = "Player 1 won !";
            p1++;
            document.getElementById("scores").innerText = `${p1} / ${p2}`;
        }
    }

}

function clicked(box) {
    if (!box.innerText && !won) {

        // to change the alerts accoording to players turn
        if (flag) {
            instruction.innerText = "It's Player 2's Turn";
        }
        else {
            instruction.innerText = "It's Player 1's Turn";
        }

        // to change the symbols according to players turn

        if (flag) {
            box.innerText = "X";
            flag = !flag;
        }
        else {
            box.innerText = "O";
            flag = !flag;
        }

        count++;

        if (count >= 9) {
            instruction.innerText = "It's a Tie";
        }

        check();
    }
}

Array.from(cards).forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
        event.target.style.bottom = "4.3rem";
    }
    );
    element.addEventListener("mouseout", function (event) {
        event.target.style.bottom = "";
    });
});

box1.addEventListener("click", function () { clicked(box1) });
box2.addEventListener("click", function () { clicked(box2) });
box3.addEventListener("click", function () { clicked(box3) });
box4.addEventListener("click", function () { clicked(box4) });
box5.addEventListener("click", function () { clicked(box5) });
box6.addEventListener("click", function () { clicked(box6) });
box7.addEventListener("click", function () { clicked(box7) });
box8.addEventListener("click", function () { clicked(box8) });
box9.addEventListener("click", function () { clicked(box9) });

document.getElementById("btn").addEventListener("click", resetBoard);

document.getElementById("reset").addEventListener("click", function () {
    p1 = 0;
    p2 = 0;
    document.getElementById("scores").innerText = "0 / 0";
    resetBoard();
})
