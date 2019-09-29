import * as ele from "./elements";
let saved = false;

const notesScript = () => {
  ele.injectELements();

  // get elements
  const saveBtn = document.getElementById("candy-save");
  const saveBtnText = document.getElementById("candy-save-text");
  const notesTextArea = document.getElementById("candy-notes");

  const chatId = window.location.pathname.split("/")[2];
  const storageKey = `candy:${chatId}`;

  // save notes to local storage
  const saveNotes = e => {
    localStorage.setItem(storageKey, notesTextArea.value);
    saveBtn.classList.add("vds-button--secondary");
    saveBtnText.innerHTML = "Saved";
    saved = true;
  };
  const canSaveNotes = e => {
    if (saved) {
      saveBtnText.innerHTML = "Save";
      saveBtn.classList.remove("vds-button--secondary");
      saved = false;
    }
  };

  // load notes
  const notes = localStorage.getItem(storageKey);
  notesTextArea.value = notes;

  saveBtn.addEventListener("click", saveNotes);
  notesTextArea.addEventListener("keyup", canSaveNotes);
};

export default notesScript;
