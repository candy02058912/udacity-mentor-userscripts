export const injectELements = () => {
  const notesDiv = document.createElement("div");
  const notesTitle = document.createElement("h3");
  const notesTextArea = document.createElement("textarea");
  const saveBtn = document.createElement("button");
  const saveBtnText = document.createElement("span");

  const sidebar = document.querySelector(
    ".participant-details_bodySegment__v46XI"
  );
  saveBtnText.append("Save");
  saveBtnText.classList.add("vds-button__content");
  saveBtnText.setAttribute("id", "candy-save-text");

  saveBtn.classList.add("vds-button", "vds-button--primary");
  saveBtn.setAttribute("style", "margin-top: 1rem;");
  saveBtn.setAttribute("id", "candy-save");
  saveBtn.append(saveBtnText);

  notesTextArea.setAttribute("id", "candy-notes");

  notesTitle.append("Notes");
  notesDiv.append(notesTitle, notesTextArea, saveBtn);
  sidebar.prepend(notesDiv);
};
