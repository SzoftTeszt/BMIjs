function init(){
    document.getElementById("alert").style.display="none"
    document.getElementById("gomb").onclick=szamol
}

init();

function szamol(){
    // console.log("Én most jól kiszámolom a BMI-det!")
    magassag=Number(document.getElementById("magassag").value)/100
    suly=Number(document.getElementById("suly").value)
    
    bmi = Math.round( suly/(magassag*magassag)*10000 ) /10000
    message= `A BMI-d ${bmi}!`

    document.getElementById("alert").className="alert alert-success my-4"
    if (bmi<18.5)
        {
           
            document.getElementById("alert").classList.remove("alert-success")
            document.getElementById("alert").classList.add("alert-warning")
            message += ` Te kis csontváz!!!`
            
        }
    if (bmi>25)
        {
            document.getElementById("alert").classList.remove("alert-success")
            document.getElementById("alert").classList.add("alert-danger")
            message += ` Te még nem kaptál szívinfartust?`
            
        }
    document.getElementById("alert").innerHTML=message
    document.getElementById("alert").style.display="block"

    // 18.5<Sovi
    // 25<normi
    // dagi
}



function szamol2(){
    console.log("Másik számolás")
}



// document.getElementById("gomb").addEventListener("click",szamol)