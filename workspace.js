
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
}
