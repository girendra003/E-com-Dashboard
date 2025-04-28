const express = require('express');
const cors = require('cors');
require('./db/config');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));
