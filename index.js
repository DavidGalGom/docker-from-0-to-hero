import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.LOCAL_PORT ?? 4040;
const testResponse = {
  title:'Docker compose test',
  content:'Content',
  id:1
}

app.get('/', (req, res) => {
  res.send('Hello Docker');
});

app.get('/test', (req, res) => {
  res.send(testResponse);
});

app.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});