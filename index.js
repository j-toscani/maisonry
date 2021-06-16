import createAppendImageBy from "./scripts/createAppendImageBy.js";
import setUpImages from "./scripts/fetchImages.js";
import setUpMqls from "./scripts/setUpMqls.js";

const mqlQueries = [
  "(max-width: 767px)",
  "(min-width: 768px) and (max-width: 1119px)",
  "(min-width: 1200px)",
];

const appendImageByHeight = createAppendImageBy("height");

setUpImages(appendImageByHeight);

setUpMqls(
  { mqlQueries, columnQuery: ".column", imageQuery: "img" },
  appendImageByHeight
);
