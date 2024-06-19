const boxes=document.querySelectorAll(".box");
const resetButton=document.querySelector("#reset-button");
const win=document.querySelector(".winner");
// since we have alternate turn so i sjhould know whoose chance is
 let turn0=true; //player 0 or player x
// so we will create a 2d array to store winning pattern
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){ //player 0 ki turn hai
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        // ye use kiya jata hai taki dubara click kre to change n hio
        box.disabled=true;
        checkwinner();
    })
});
const disabledboxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    win.innerText=`congratulations,the winner is ${winner}`;
    disabledboxes();
}
 const checkwinner=()=>{
    for(let  pattern of winpatterns){
            let posi1=boxes[pattern[0]].innerText;
            let posi2=boxes[pattern[1]].innerText;
            let posi3=boxes[pattern[2]].innerText;
            if(posi1!="" && posi2!="" && posi3!=""){
                if(posi1===posi2 && posi2===posi3){
                    console.log("winner");
                    showwinner(posi1);
                }
            }
    }
 };
 const genrate=document.querySelector(".newgame");
//  see on thing when you queryselectorall it creates an array of all the 
// of all the boxeswhich has class box
genrate.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    win.innerText="";
}); 
resetButton.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        turn0=true;
        box.innerText="";
        box.disabled=false;

    })
})