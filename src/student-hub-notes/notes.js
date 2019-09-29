import * as ele from "./elements";
const notesScript = () => {
  ele.injectELements();

  const chatId = window.location.pathname.split("/")[2];
  const storageKey = `candy:${chatId}`;

  // Save notes to local storage
  let saved = false;
  const saveNotes = e => {
    localStorage.setItem(storageKey, ele.notesTextArea.value);
    ele.saveBtn.classList.add("vds-button--secondary");
    ele.saveBtnText.innerHTML = "Saved";
    saved = true;
  };
  const canSaveNotes = e => {
    if (saved) {
      ele.saveBtnText.innerHTML = "Save";
      ele.saveBtn.classList.remove("vds-button--secondary");
      saved = false;
    }
  };

  // Load notes
  const notes = localStorage.getItem(storageKey);
  ele.notesTextArea.value = notes;

  // Bind events
  ele.saveBtn.addEventListener("click", saveNotes);
  ele.notesTextArea.addEventListener("keyup", canSaveNotes);
};

export default notesScript;
