export default async function setUpImages(handleShuffle) {
  try {
    const response = await fetchImages();
    const images = createImages(response);

    handleShuffle(images);
  } catch (error) {
    console.error(error);
  }
}

async function fetchImages(
  url = "https://picsum.photos/v2/list?page=1&limit=20"
) {
  const response = await fetch(url);
  return response.json();
}

export function createImages(jsonImages) {
  return jsonImages.map((jsonImage, _index) =>
    setUpImageElement(jsonImage.download_url)
  );
}

export function setUpImageElement(src) {
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
