export default function setUpImageElement(src) {
  const imageElement = createImageElement();
  setSrcAttribute(imageElement, src);

  return imageElement;
}

function createImageElement() {
  return document.createElement("img");
}

function setSrcAttribute(imageElement, src) {
  return imageElement.setAttribute("src", src);
}
