const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at http://localhost:${PORT}`);
});