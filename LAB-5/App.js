output = document.getElementById("outputBox");

// function displayNumber(){
//     output.value += '7';
// }

function getAns(output){
    let ar = output.value.split(" ");
    // console.log(output.value);
    console.log(ar);

    

    if(ar[1] == '+'){
       let ans = (parseInt(ar[0]) + parseInt(ar[2]));
        output.value = null;
        output.value += ans;
    }

    if(ar[1] == '-'){
        let ans = (parseInt(ar[0]) - parseInt(ar[2]));
        output.value = null;
        output.value += ans;
    }

    if(ar[1] == '*'){
        let ans = (parseFloat(ar[0]) * parseFloat(ar[2]));
        output.value = null;
        output.value += ans;
    }

    if(ar[1] == '/'){
        let ans = (parseFloat(ar[0]) / parseFloat(ar[2]));
        output.value = null;
        output.value += ans;
    }
}