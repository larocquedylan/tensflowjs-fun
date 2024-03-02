// const express = require("express");
// const screenshot = require("screenshot-desktop");
// const app = express();
// const port = 3000;

// const http = require("http");
// const socketIo = require("socket.io");

// const server = http.createServer(app);
// const io = socketIo(server);

// app.use(express.static("public"));

// io.on("connection", (socket) => {
//   console.log("A user connected");
//   // Handle object detection here or in a separate file
// });

// app.get("/pic", async (req, res) => {
//   try {
//     const img = await screenshot();
//     res.send(`<img src="data:image/jpeg;base64,${img.toString("base64")}" />`);
//   } catch (error) {
//     console.error("Error capturing screen:", error);
//     res.status(500).send("Failed to capture screen");
//   }
// });

// app.get("/vid", async (req, res) => {
//   try {
//     const img = await screenshot();
//     // For simplicity, we'll just return the image as a base64 string in this example
//     res.send(
//       `<video src="data:image/jpeg;base64,${img.toString("base64")}" />`
//     );
//   } catch (error) {
//     console.error("Error capturing screen:", error);
//     res.status(500).send("Failed to capture screen");
//   }
// });

// app.listen(port, () => {
//   console.log(`Screen capture app listening at http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");
  // Handle events from the client
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
