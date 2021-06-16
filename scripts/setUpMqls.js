import columns from "./Columns.js";

export default function setUpMqls(queries, handleShuffle) {
  const handleQueryChange = createHandleQueryChange(queries, handleShuffle);
  const mqls = createMediaQueryLists(queries.mqlQueries);
  mqls.forEach((mql, index) => {
    mql.addEventListener("change", () => handleQueryChange(mql, index));

    if (mql.matches) {
      handleQueryChange(mql, index);
    }
  });
}

function createMediaQueryLists(queries) {
  return queries.map((query) => matchMedia(query));
}

function createHandleQueryChange(queries, handleShuffle) {
  const { imageQuery } = queries;
  return (mql, index) => {
    if (mql.matches) {
      const images = document.querySelectorAll(imageQuery);
      setColumnStates(index);
      handleShuffle(images);
      setGridColumns(index + 1);
    }
  };
}

function setGridColumns(numberOfVisibleColumns) {
  document
    .querySelector("[data-maisonry='wrapper']")
    .style.setProperty("--columns", numberOfVisibleColumns);
}

function setColumnStates(index) {
  const allColumns = columns.getAll();

  allColumns.forEach((_column, cindex) =>
    columns.setStateOf(cindex, cindex > index)
  );
}
