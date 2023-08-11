const express = require("express");
const server = express();
const axios = require("axios");
const PORT = process.env.PORT || 3000;

server.set("json spaces", 2);
server.get("*", async (req, res) => {
  res.json({
    online: true,
  });
});

setInterval(() => {
  try {
    const url =
      "https://" +
      process.env.REPL_SLUG +
      "." +
      process.env.REPL_OWNER +
      ".repl.co";
    axios.get(url).then((a) => {
      console.log(a.data);
    });
  } catch (e) {
    console.log(e);
  }
}, 1000 * 30);

server.listen(PORT, () => console.log(`Server running with port ${PORT}!`));
