const express = require('express');
// const cors = require('cors');   // ✅ ADD THIS
const router = require('./routes');
const cors = require("cors")
require('dotenv').config();

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://sheetal-portfolio-lac.vercel.app'] }))

// ✅ CORS MUST BE BEFORE ROUTES


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/mail', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});