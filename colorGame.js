var num = 6;
var colorArr = randomArray(num);
var message = document.querySelector("#message");
var head = document.querySelector("h1");
var ans = Math.floor(Math.random() * num);
var colorAns = colorArr[ans];
var color = document.querySelector("#choice");
var squares = document.querySelectorAll(".color");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
for (var i = 0; i < num; i++) {
    squares[i].style.backgroundColor = colorArr[i];
}
easy.addEventListener("click", function() {
    easy.classList.add("click");
    hard.classList.remove("click");
    num = 3;
    colorArr = randomArray(3);
    ans = Math.floor(Math.random() * 3);
    colorAns = colorArr[ans];
    for (var i = 0; i < 6; i++) {
        if (colorArr[i]) {
            squares[i].style.backgroundColor = colorArr[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    head.style.backgroundColor = "steelblue";
});
color.textContent = colorAns;
hard.addEventListener("click", function() {
    hard.classList.add("click");
    easy.classList.remove("click");
    num = 6;
    colorArr = randomArray(6);
    ans = Math.floor(Math.random() * 6);
    colorAns = colorArr[ans];
    for (var i = 0; i < 6; i++) {
        if (colorArr[i]) {
            squares[i].style.backgroundColor = colorArr[i];
            squares[i].style.display = "block";
        }
    }
    head.style.backgroundColor =
        "steelblue";
});
color.textContent = colorAns;
// for(var i=0;i<squares.lengthi++){
//     squares[i].style.backgroundColor=colorArr[i];
//  //   num=3;
//  //   reset(3);
// }
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === colorAns) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colorAns;
            }
            head.style.backgroundColor = colorAns;
            message.textContent = "CORRECT ANSWER";
            reset.textContent = "PLAY AGAIN ?"
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "TRY AGAIN";
        }
    })
}
var reset = document.querySelector("#reset");

reset.addEventListener("click", function() {
    ans = Math.floor(Math.random() * num);
    colorArr = randomArray(num);
    colorAns = colorArr[ans];
    color.textContent = colorAns;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorArr[i];
    }
    message.textContent = "";
    head.style.backgroundColor = "steelblue";
    reset.textContent = "NEW COLORS"
});
// function resetColor(number){
//     ans=Math.floor(Math.random()*number);
//     colorArr=randomArray(number);
//     colorAns=colorArr[ans];
//     color.textContent=colorAns;
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.backgroundColor=colorArr[i];
//     }
//     message.textContent="";
//     head.style.backgroundColor="#232323";
// }
function randomArray(numbers) {
    var arr = [];
    for (var i = 0; i < numbers; i++) {
        arr[i] = randomColors();

    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
