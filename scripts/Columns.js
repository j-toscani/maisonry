function setColumnState(index, isVisible) {
  const column = getColumn(index);
  column.dataset.maisonry = isVisible ? "column-hidden" : "column-visible";
}

function getColumns(containerQuery) {
  return document.querySelectorAll(containerQuery);
}

function getHiddenColumns() {
  return getColumns("[data-maisonry='column-hidden']");
}
function getVisibleColumns() {
  return getColumns("[data-maisonry='column-visible']");
}
function getAllColumns() {
  return getColumns("[data-maisonry*='column-']");
}

function getColumn(index = 0) {
  return getAllColumns()[index];
}

class Columns {
  constructor() {}
  getOne = getColumn;
  getNthVisible = (index) => getVisibleColumns()[index];
  getNthHidden = (index) => getHiddenColumns()[index];
  getAll = getAllColumns;
  getAllVisible = getVisibleColumns;
  getAllHidden = getHiddenColumns;
  setStateOf = setColumnState;
}

const columns = new Columns();

export default columns;
