const darkThemeButton = document.querySelector(".dark_theme_button");
const text_area = document.querySelector(".text_area")
const aside_area = document.querySelector(".aside_area")
const body_area = document.querySelector(".body_area")
const buttons = document.querySelector(".button")

darkThemeButton.addEventListener('click',dark_mode);

function dark_mode(){
    text_area.classList.toggle("gray_bg_color")
    aside_area.classList.toggle("gray_bg_color")
    body_area.classList.toggle("black_bg_color")
    body_area.classList.toggle("white_font_color")
    buttons.classList.toggle("white_font_color")
}
