const { response } = require("express");
const express = require("express");

const app = express();

//this is helping to the  "post req body"
app.use(express.json());
//cors origin req enabling
const cors = require("cors");
app.use(cors());
const { selectUser, addUser } = require("./user11");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  //   response.json({ message: "Get Req" });
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;

  await addUser(user);
  res.json({ message: "added" });
});
app.listen(3000, () => console.log("server started"));
