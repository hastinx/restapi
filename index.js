//Using Express
import express, { application } from "express";
import router from "./router/index.js";
const PORT = 9000;
const app = express();

app.use(express.json());

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
