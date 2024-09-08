const num1=0.5
// const imageUrl = "https://c8.alamy.com/comp/CN8BEX/2-two-pound-coin-head-on-heads-obverse-2012-CN8BEX.jpg"; // Replace with your image URL

function toss(){
    const result=Math.random()
    if(result < num1){
        document.getElementById("result").textContent="HEAD !Yes, You Won Toss."
    }
    else{
    document.getElementById("result").textContent="TAILS ! Ooh, You Loss Toss";
}
}

