if (process.argv.length < 4) {
  console.warn("Provide the list size and the value to insert");
  process.exit(1);
}

const [, , listSize, value] = process.argv;

module.exports = {
  listSize: parseInt(listSize.replaceAll("_", "")),
  value: parseInt(value.replaceAll("_", "")),
};
