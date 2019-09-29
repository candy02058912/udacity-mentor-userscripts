export const notesDiv = document.createElement("div");
export const notesTitle = document.createElement("h3");
export const notesTextArea = document.createElement("textarea");
export const saveBtn = document.createElement("button");
export const saveBtnText = document.createElement("span");

export const injectELements = () => {
  const sidebar = document.querySelector(
    ".participant-details_bodySegment__v46XI"
  );
  saveBtnText.append("Save");
  saveBtnText.classList.add("vds-button__content");

  saveBtn.classList.add("vds-button", "vds-button--primary");
  saveBtn.setAttribute("style", "margin-top: 1rem;");
  saveBtn.append(saveBtnText);

  notesTitle.append("Notes");
  notesDiv.append(notesTitle, notesTextArea, saveBtn);
  sidebar.prepend(notesDiv);
};
