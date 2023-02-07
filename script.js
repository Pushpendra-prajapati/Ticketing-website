let adults;
let children;

if(adults < 0) {
    adults = 0;
}
if(children < 0) {
    children = 0;
}

for(let i=1; i<=adults; i++){
    console.log("Ticket #"+i);
    console.log("<br/>");
}

function calc(adults, children){
    return (adults*12 + children*5);
}

window.onload = function() {
    let btn = document.getElementById("buyBtn");
    btn.onclick = function() {
        let adults = document.getElementById("adults").value;
        let children = document.getElementById("children").value;
        let price = calc(adults, children);
        alert("Total Price " + "$ " + price);
    }
}


console.log(price);
   
