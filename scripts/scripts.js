const darkThemeButton = document.querySelector(".dark_theme_button");
const text_area = document.querySelector(".text_area")

darkThemeButton.addEventListener('click',dark_mode);

function dark_mode(){
    text_area.classList.toggle("gray_bg_color")
    
}