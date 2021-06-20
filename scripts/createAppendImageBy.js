import columns from "./Columns.js";

export default function createAppendImageBy(apendBy) {
  const getAppendIndex = createGetAppendIndex(apendBy);

  return async (imageElements) => {
    for (let index = 0; index < imageElements.length; index++) {
      const image = imageElements[index];

      if (!image.complete) {
        await handleAsyncAppend(image);
      }
      if (![...image.classList].includes("loaded")) {
        image.classList.add("loaded");
      }

      const columnIndexToAppendTo = await getAppendIndex(
        image,
        index,
        imageElements
      );

      appendImageTo(image, columnIndexToAppendTo);
    }
  };
}

function createGetAppendIndex(appendBy) {
  switch (appendBy) {
    case "height":
      return appendBySmallestColumn;

    default:
      return appendByIndexOrder;
  }
}

function appendBySmallestColumn(_image, _index, _images) {
  const containers = columns.getAllVisible();
  const innerHeights = [...containers].map((container) =>
    getInnerHeight(container)
  );

  return innerHeights.indexOf(Math.min(...innerHeights));
}

function getInnerHeight(container) {
  const children = [...container.children];
  let height = 0;

  children.forEach((child) => {
    height += child.getBoundingClientRect().height;
  });

  return height;
}

function appendByIndexOrder(_image, index) {
  return index % columns.getAll().length;
}

async function handleAsyncAppend(image) {
  try {
    await setUpLoadPromise(image);
  } catch (error) {
    console.error(error);
  }
}

function setUpLoadPromise(imageElement) {
  const loadedPromise = new Promise((resolve, reject) => {
    imageElement.onload = resolve;
    imageElement.onerror = reject;
  });
  return loadedPromise;
}

export function appendImageTo(image, index) {
  const column = columns.getNth(index);
  column.appendChild(image);
}
