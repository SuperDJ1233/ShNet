let button_mode;

let darkColorMode = localStorage.getItem("darkMode");

button_mode = document.getElementById("toggle_mode");

console.log(darkColorMode);
if(darkColorMode === null){
    darkColorMode = (button_mode.textContent != 'Dark Mode')? '1' : '0';
}

//in case ne cookie eshte ruajtur darkmode
if(darkColorMode=='1'){
    turnBlack();
}else{
     //defaulti already eshte white mode 
}

function turnBlack(){
    button_mode.textContent = 'Light Mode';
    document.getElementById("style").href = `../styles/style_dark.css`
}
function turnWhite(){
    button_mode.textContent = 'Dark Mode';
    document.getElementById("style").href = `../styles/style.css`
}

button_mode.onclick = function(){
    console.log(darkColorMode);
    if(darkColorMode=='1'){
        localStorage.setItem("darkMode", '0');
        turnWhite();    
    }else{
        localStorage.setItem("darkMode", '1');
        turnBlack();    
    }
    darkColorMode = localStorage.getItem("darkMode");
    console.log(darkColorMode);

}


/*
let darkMode = document.getElementById("toggle_mode")
darkMode.onclick = function(){
    console.log(darkMode.textContent);
    if(darkMode.textContent =='Dark Mode'){
        darkMode.textContent = 'Light Mode';
        console.log(document.getElementById("style"));
        document.getElementById("style").href = `../styles/style_dark.css`
    }else{
        darkMode.textContent = 'Dark Mode';
        document.getElementById("style").href = `../styles/style.css`
    }
}*/
