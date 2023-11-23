const iframe = document.createElement("iframe");
iframe.src = "https://site.nhd.org/43331140/uploaded/index.html";
iframe.style.width = "100%";
iframe.style.height = "100vh";
iframe.style.border = "none";
iframe.style.outline = "0";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";

document.body.appendChild(iframe);
