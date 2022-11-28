const darkThemeButton = document.querySelector(".dark_theme_button");
const text_area = document.querySelector(".text_area")
const aside_area = document.querySelector(".aside_area")
const body_area = document.querySelector(".body_area")

darkThemeButton.addEventListener('click',dark_mode);

function dark_mode(){
    text_area.classList.toggle("dark_mode_text_area")
    aside_area.classList.toggle("dark_mode_aside")
    body_area.classList.toggle("dark_mode_body")
    if (darkThemeButton.textContent === "Dark Theme")
    darkThemeButton.textContent = "Light Theme";
    else if (darkThemeButton.textContent === "Light Theme")
    darkThemeButton.textContent = "Dark Theme";
}
