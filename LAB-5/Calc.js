let btn = document.querySelector(".btn");
let output = document.querySelector(".output");
let ans = 0;


function display(val){


    if(val == "="){
        output.innerText = eval(output.innerText);
    }
    else{
        output.innerText += val;
    }
}
function Allclear(){
    output.innerHTML = " "
}
function ClearOne(){
    output.innerText = (output.innerText).substring(0,((output.innerText.length)-1))
}