const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const ENDPOINT =
  "http://185.253.155.200:19810/api/GAppWeb/Productostiendahome?idcliente=0&phone=adasd";

const main = async () => {
  const data = await fetch(ENDPOINT);
  try {
    fs.writeFileSync(
      path.resolve(__dirname, "src/data/products.json"),
      data.text(),
      {
        encoding: "utf8",
        flag: "w",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

main();
