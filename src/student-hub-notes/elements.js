export const injectELements = () => {

  //Create array of options to be added
  var optNames =  ['Support request','Dashboard','Quick tips','Message toolkit'];
  var optValues = ['http://rebrand.ly/mentor-support','https://mentor-dashboard.udacity.com/','https://sites.google.com/udacity.com/udacity-community-guide/resources/student-hub-quick-tips','http://bit.ly/message-template-toolkit'];

  //Create and append select list
  var selectList = document.createElement("select");
  selectList.id = "mySelect";
  var option = document.createElement("option");
  option.value = "";
  option.text = 'Mentor useful links';
  option.disabled = true;
  option.selected = "selected";
  selectList.appendChild(option);

  //Create and append the options
  for (var i = 0; i < optNames.length; i++) {
    var option = document.createElement("option");
    option.value = optValues[i];
    option.text  = optNames[i];
    selectList.appendChild(option);
  }

  selectList.onchange = function(){
    var win = window.open(this.value, '_blank');
    win.focus();
  }

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
  sidebar.prepend(selectList, notesDiv);
};
