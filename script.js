let boxes=document.querySelectorAll(".btn");

let resetBtn=document.querySelector(".reset");


let winner=document.querySelector(".winner");
let win=document.querySelector("#win");
let new_btn=document.querySelector(".new_btn");

let turnO=true;  //PlayerX and PlayerO

const winPatterns=[
                   [0,1,2],
                   [3,4,5],
                   [6,7,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [0,4,8],
                   [2,4,6]
];


boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("Box is been clicked");

        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }

        checkWinner();
    })
})

const disable_boxes=()=>{
    for(let box of boxes)
        box.disabled=true;
}

const enable_boxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(player)=>{
    win.innerText=`Winner is ${player}`;
    winner.classList.remove("hide");

    disable_boxes();
}

const checkWinner=() => {
    for(let pattern of winPatterns) 
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner");

                showWinner(pos1);
            }
        }
    }
};


const resetGame=()=>{
    turnO=true;
    winner.classList.add("hide");

    enable_boxes();
}

resetBtn.addEventListener("click",resetGame);

new_btn.addEventListener("click",resetGame);


