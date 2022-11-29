/*--------Dark Theme Button---------*/
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

/*---------Cancel Button--------*/
const cancelButton = document.querySelector(".cancel_button")
const saveButton = document.querySelector(".save_button")

cancelButton.addEventListener('click',cancel_hide)

function cancel_hide(){
    text_area.classList.add("display_none")
    saveButton.classList.add("display_none")
    cancelButton.classList.add("display_none")
}

/*---------New Note Button--------*/

const newNoteButton = document.querySelector(".new_note_button")

newNoteButton.addEventListener('click',new_note)

function new_note(){
    if (text_area.classList.contains("display_none")){
        text_area.classList.remove("display_none")
        saveButton.classList.remove("display_none")
        cancelButton.classList.remove("display_none")
    }
    else{
        text_area.value = ""
    }
}
/*---------New Array--------*/
const notesArray = [
    {
    title: "note one",
    body: "this is my first note"
    },
    {
    title:"note two",
    body: "this is my second note"
    }
]

/*---------Save Button-------*/
saveButton.addEventListener('click',save_to_array)
// saveButton.addEventListener('click',add_to_list)

function save_to_array(){
    title_name= prompt("Please insert the title name!")
    let body_text= text_area.value
    notesArray.push(
        {title:title_name,
            body:body_text
        }
        )
    const listItemElement = document.createElement("li");
    listItemElement.textContent = title_name;
    noteList.appendChild(listItemElement);
}

/*---------My Notes List Clickable-------*/
const noteList = document.querySelector(".note_list")
noteList.addEventListener('click',array_search)



function array_search(e){
    console.log(e.target)
    for (let note of notesArray){
        if(note.title.includes(e.target.textContent) ){
            text_area.value = note.body
            }
    }
}