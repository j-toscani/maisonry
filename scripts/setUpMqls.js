export default function setUpMqls(queries, handleShuffle) {
  const handleQueryChange = createHandleQueryChange(queries, handleShuffle);
  const mqls = createMediaQueryLists(queries.mqlQueries);
  mqls.forEach((mql, index) => {
    mql.addEventListener("change", () => handleQueryChange(mql, index));
  });
}

function createMediaQueryLists(queries) {
  return queries.map((query) => matchMedia(query));
}

function createHandleQueryChange(queries, handleShuffle) {
  const { columnQuery, imageQuery } = queries;
  return (mql, index) => {
    if (mql.matches) {
      const columns = document.querySelectorAll(columnQuery);
      const images = document.querySelectorAll(imageQuery);

      setColumnClasses(columns, index);
      handleShuffle(images);
    }
  };
}

function setColumnClasses(columns, index) {
  columns.forEach((column, cIndex) =>
    column.classList[cIndex > index ? "add" : "remove"]("hidden")
  );
}
