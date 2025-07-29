import Express from 'express';
import router from './routes';

const app = Express();
const PORT = 3001;

app.use (router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});