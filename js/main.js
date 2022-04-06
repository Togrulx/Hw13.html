function mode(){
    let mode = confirm("Choose mode");
    let body = document.body;
    let icon = document.getElementById("btn");

    if(mode === true){
        body.style.backgroundColor = "black";
        icon.className = "fa-solid fa-sun";
        icon.style.color= "white";
        btn2.style.color="white"
    }
    else{
        document.body.style.backgroundColor = "white";
        icon.className = "fa-solid fa-moon";
        icon.style.color= "black";
        btn2.style.color="black"
    }
}

function age(){
    var ageStr = prompt("Yasinizi daxil edin min 18 olmalidir");
    var age = parseInt(ageStr);

    if( age>=18){
        alert("Daxil oldunuz");
    }
    else{
        alert("Sizin yasiniz 18-in altindadir");
        
    }
}