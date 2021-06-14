import setUpImageElement from "./setUpImageElement.js";

export default async function setUpImages(handleShuffle) {
  try {
    const response = await fetchImages();
    handleShuffle(createImages(response));
  } catch (error) {
    console.error(error);
  }
}

async function fetchImages() {
  const url = "https://picsum.photos/v2/list?page=4&limit=20";
  const response = await fetch(url);
  return response.json();
}

export function createImages(jsonImages) {
  return jsonImages.map((jsonImage, index) =>
    setUpImageElement(jsonImage.download_url)
  );
}
