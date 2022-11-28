const darkTheme = document.querySelector(".dark_theme");
const universal = document.


darkTheme.addEventListener('click',dark_mode);

function dark_mode(){
    darkTheme.classList.toggle("gray_color")
    document.classList.toggle("white_font")

}