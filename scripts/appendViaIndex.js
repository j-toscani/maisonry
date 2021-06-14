import appendImage from "./appendImage.js";
import getColumns from "./getColumns.js";

export default async function appendViaIndex(imageElements) {
  const columns = getColumns();
  for (let index = 0; index < imageElements.length; index++) {
    const image = imageElements[index];

    await handleAsyncAppend(image);
    appendImage(columns[index % columns.length], image);
  }
}

async function handleAsyncAppend(image) {
  try {
    await setUpLoadPromise(image);
    image.classList.add("loaded");
  } catch (error) {
    console.error(error);
  }
}

function setUpLoadPromise(imageElement) {
  const loadedPromise = new Promise((resolve, reject) => {
    if (imageElement.complete) {
      resolve();
      return;
    }
    imageElement.onload = resolve;
    imageElement.onerror = reject;
  });
  return loadedPromise;
}
