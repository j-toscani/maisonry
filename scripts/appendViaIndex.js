import appendImage from "./appendImage.js";
import setUpImageElement from "./createImageElement.js";
import { getColumns } from "./getSmallestColumn.js";

export default function appendViaIndex(jsonImages) {
  const columns = getColumns();
  debugger;
  jsonImages.forEach((jsonImage, index) => {
    const imageElement = setUpImageElement(jsonImage.download_url);
    appendImage(columns[index % 4], imageElement);
  });
}
