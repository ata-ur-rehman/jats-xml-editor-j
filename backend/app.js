const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const journalRoutes = require('./routes/journalRoutes');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
