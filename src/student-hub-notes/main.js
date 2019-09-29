import notesScript from "./notes";

const main = () => {
  const startScript = setInterval(function() {
    const loaded = document.querySelector(
      ".nanodegree-list-accordion_nanodegreeList__2z2nn"
    );
    if (loaded) {
      clearInterval(startScript);
      notesScript();
    }
  }, 1000);
};

export default main;
