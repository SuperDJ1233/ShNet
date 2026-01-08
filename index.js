let username

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
    document.getElementById("style").href = `./styles/style_dark.css`
}
function turnWhite(){
    button_mode.textContent = 'Dark Mode';
    document.getElementById("style").href = `./styles/style.css`
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
/*let button_mode;

let darkColorMode = document.cookie
    .split("; ")
    .find((row) => row.startsWith("colorMode="))
    ?.split("=")[1];

button_mode = document.getElementById("toggle_mode");

console.log(darkColorMode);
if(darkColorMode === undefined){
    darkColorMode = (button_mode.textContent=='Dark Mode')? false:true;
}
//in case ne cookie eshte ruajtur darkmode
if(darkColorMode=='true'){
    document.cookie = 'colorMode=true;'
    button_mode.textContent = 'Light Mode';
    console.log(document.getElementById("style"));
    document.getElementById("style").href = `./styles/style_dark.css`
}
console.log(darkColorMode);

button_mode.onclick = function(){
    console.log(darkColorMode);

    
    console.log(darkColorMode);
    if(darkColorMode=='true'){
        document.cookie = 'colorMode=flase;'
        button_mode.textContent = 'Light Mode';
        console.log(document.getElementById("style"));
        document.getElementById("style").href = `./styles/style_dark.css`
    }else{
        document.cookie = 'colorMode=true;'
        button_mode.textContent = 'Dark Mode';
        document.getElementById("style").href = `./styles/style.css`
    }
    
    darkColorMode = document.cookie
    .split("; ")
    .find((row) => row.startsWith("colorMode="))
    ?.split("=")[1];
}*/

const cookieValue = document.cookie
.split("; ")
.find((row) => row.startsWith("username="));

console.log(cookieValue);

//username = window.prompt("Si quhesh?");
if(cookieValue == undefined){
    username = window.prompt("Si quhesh?");
    document.cookie = `username=${username}; `
}else{
    username = cookieValue.split('=')[1];
}
if(username != null){
    document.getElementById("pershendetje").textContent = `Përshëndetje ${username} !`;
}
