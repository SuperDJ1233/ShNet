let username;

let darkMode = document.getElementById("toggle_mode")
darkMode.onclick = function(){
    console.log(darkMode.textContent);
    if(darkMode.textContent =='Dark Mode'){
        darkMode.textContent = 'Light Mode';
        console.log(document.getElementById("style"));
        document.getElementById("style").href = `./styles/style_dark.css`
    }else{
        darkMode.textContent = 'Dark Mode';
        document.getElementById("style").href = `./styles/style.css`
    }
}

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
document.getElementById("pershendetje").textContent = `Përshëndetje ${username} !`;
