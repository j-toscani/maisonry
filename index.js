import appendViaIndex from "./scripts/appendViaIndex.js";
import fetchImages from "./scripts/fetchImages.js";

fetchImages()
  .then((response) => appendViaIndex(response))
  .catch((error) => console.error(error));
