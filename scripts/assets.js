const copy = require("copy");
copy("./assets/**/*.*", "dist/", (err, files) => {
  console.log(err);
  if (err) {
    console.error("copy files error");
    console.error(err);
    return;
  }
  console.log(files.length + "copied");
});
