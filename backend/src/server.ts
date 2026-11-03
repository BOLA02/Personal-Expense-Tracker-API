import app from '../src/app';

// Read the port from your environment variables (.env file) or fallback to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server listening perfectly on http://localhost:${PORT}`);
});
