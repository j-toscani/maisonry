export default async function fetchImages() {
  const url = "https://picsum.photos/v2/list";
  const response = await fetch(url);
  return response.json();
}
