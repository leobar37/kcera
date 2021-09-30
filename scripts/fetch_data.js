const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const ENDPOINT =
  "https://api.kacera.pe/api/GAppWeb/Productostiendahome?idcliente=0&phone=adasd";

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
