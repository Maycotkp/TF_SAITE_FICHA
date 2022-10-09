atributo_V = 0
document.getElementById("Atributo_F").innerHTML = atributo_V
document.getElementById("Atributo_D").innerHTML = atributo_V
document.getElementById("Atributo_Co").innerHTML = atributo_V
document.getElementById("Atributo_I").innerHTML = atributo_V
document.getElementById("Atributo_S").innerHTML = atributo_V
document.getElementById("Atributo_C").innerHTML = atributo_V
function cacularatributoFA(){
    var atributo_B = document.getElementById("FA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_F").innerHTML = atributo_V
}

function cacularatributoDA(){
    var atributo_B = document.getElementById("DA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_D").innerHTML = atributo_V
}

function cacularatributoCOA(){
    var atributo_B = document.getElementById("COA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_Co").innerHTML = atributo_V
}

function cacularatributoIA(){
    var atributo_B = document.getElementById("IA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_I").innerHTML = atributo_V
}

function cacularatributoSA(){
    var atributo_B = document.getElementById("SA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_S").innerHTML = atributo_V
}

function cacularatributoCA(){
    var atributo_B = document.getElementById("CA").value;
    if(atributo_B == ""){
        
    }else{
        atributo_V = (parseInt(atributo_B)-10)/2
        parseInt(atributo_V)
        console.log(atributo_V)
    }
    
    document.getElementById("Atributo_C").innerHTML = atributo_V
}