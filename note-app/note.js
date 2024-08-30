const addBox = document.querySelector(".add-box"),
      popupBox = document.querySelector(".popup-box"),
      popupTitle = popupBox.querySelector("header p"),
      closeIcon = popupBox.querySelector("header i"),
      titleTag = popupBox.querySelector("input"),
      descTag = popupBox.querySelector("textarea"),
      addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
let notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateId;

const togglePopup = (show, update = false, title = "", btnText = "Add Note") => {
    popupTitle.innerText = title;
    addBtn.innerText = btnText;
    popupBox.classList.toggle("show", show);
    document.body.style.overflow = show ? "hidden" : "auto";
    if (show && window.innerWidth > 660) titleTag.focus();
};

addBox.addEventListener("click", () => togglePopup(true, false, "Add a new Note", "Add Note"));

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = "";
    togglePopup(false);
});

function showNotes() {
    document.querySelectorAll(".note").forEach(li => li.remove());
    notes.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `
            <li class="note">
                <div class="details">
                    <p>${note.title}</p>
                    <span>${filterDesc}</span>
                </div>
                <div class="bottom-content">
                    <span>${note.date}</span>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="fa-solid fa-ellipsis-h"></i>
                        <ul class="menu">
                            <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')">
                                <i class="fa-solid fa-pen"></i>Edit
                            </li>
                            <li onclick="deleteNote(${id})">
                                <i class="fa-solid fa-trash"></i>Delete
                            </li>
                        </ul>
                    </div>
                </div>
            </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName !== "I" || e.target !== elem) {
            elem.parentElement.classList.remove("show");
        }
    }, { once: true });
}

function deleteNote(noteId) {
    if (confirm("Are you sure you want to delete this note?")) {
        notes.splice(noteId, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
    }
}

function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\n');
    updateId = noteId;
    isUpdate = true;
    togglePopup(true, true, "Update a Note", "Update Note");
    titleTag.value = title;
    descTag.value = description;
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim();
    let description = descTag.value.trim();

    if (title || description) {
        let currentDate = new Date();
        let month = months[currentDate.getMonth()];
        let day = currentDate.getDate();
        let year = currentDate.getFullYear();

        let noteInfo = {
            title,
            description,
            date: `${month} ${day}, ${year}`
        };

        if (!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
});
