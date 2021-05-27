export default function getColumns(containerQuery = ".column:not(.hidden)") {
  return document.querySelectorAll(containerQuery);
}
