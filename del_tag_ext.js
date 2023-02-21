function deleteElmExt() {
  const elmCleanList = JSON.parse(localStorage.getItem("elmCleanList")) || [];

  elmCleanList.forEach(function (elm1) {
    const tags = document.getElementsByTagName(elm1.tag);

    for (let tag of tags) {
      if (tag.classList.value.trim() == elm1.classList.trim()) {
        if (elm1.bgImage == true) {
          tag.style.backgroundImage = "none";
        } else {
          tag.remove();
        }
      }
    }
  });

  if (localStorage.getItem("iframeStatus") == "true") {
    const iframes = document.getElementsByTagName("iframe");
    for (let iframe of iframes) {
      iframe.remove();
    }
  }
}

deleteElmExt();

setTimeout(function () {
  deleteElmExt();
}, 1000);

setInterval(function () {
  deleteElmExt();
}, 2000);
