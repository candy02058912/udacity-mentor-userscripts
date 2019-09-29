import main from "./main";
const fireOnHashChangesToo = true;
setInterval(function() {
  if (
    this.lastPathStr !== location.pathname ||
    this.lastQueryStr !== location.search ||
    (fireOnHashChangesToo && this.lastHashStr !== location.hash)
  ) {
    this.lastPathStr = location.pathname;
    this.lastQueryStr = location.search;
    this.lastHashStr = location.hash;
    main();
  }
}, 100);
