async function currencyConverter(params) {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    console.log(from,to,amount);


    try {
        let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        const data = await res.json()
        const rate = data.rates[to]
        const convert_amount = amount*rate;
        console.log(" Converted Amount Is : ",convert_amount);
        document.getElementById('result').textContent=`Converted Amount is: ${convert_amount}` ;
        
    } catch (error) {
        
    }

        
}

btn=document.querySelector("button");
currMode="dark";
btn.addEventListener("click",()=>{
    if (currMode==="dark"){
    console.log("ligth mode")
        currMode="light";
        document.querySelector(".header").style.backgroundColor="white";
        document.querySelector(".header").style.color="black"
        document.querySelector("form").style.backgroundColor="white";
        document.querySelector("form").style.color="black"
    // btn.textContent="Light Mode"
    }
    else{
         currMode="dark"
        console.log("Dark mode");
    document.querySelector(".header").style.backgroundColor="Black";
    document.querySelector(".header").style.color="white"
    document.querySelector("form").style.backgroundColor="Black";
    document.querySelector("form").style.color="white"
    // btn.textContent="Light Mode"
    }
})