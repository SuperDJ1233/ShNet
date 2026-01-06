let username;

let darkMode = document.getElementById("toggle_mode")
darkMode.onclick = function(){
    console.log(darkMode.textContent);
    if(darkMode.textContent =='Dark Mode'){
        darkMode.textContent = 'Light Mode';
    }else{
        darkMode.textContent = 'Dark Mode';
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
