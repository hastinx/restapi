//Using Express
import express from "express";
import router from "./router/index.js";
const PORT = 9000;
const app = express();

app.use(express.json());

app.use('/api', router)

app.listen(PORT, () => {
  console.log('================================================== SERVER RUNNING ==================================================');
  console.log('======================================== http://localhost:9000/api/ =========================================');
});
