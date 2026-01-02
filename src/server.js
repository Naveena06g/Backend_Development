
// const express = require('express');
// require('dotenv').config();
// const app = express();

// app.use(express.json());

// const eventRoutes = require('./routes/event.routes');
// const nudgeRoutes = require('./routes/nudge.routes');

// app.use('/api', eventRoutes);
// app.use('/api', nudgeRoutes);

// app.get('/', (req, res) => {
//   res.send('Nudge Backend Running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );


const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// routes
const eventRoutes = require('./routes/event.routes');
const nudgeRoutes = require('./routes/nudge.routes');

app.use('/api', eventRoutes);
app.use('/api', nudgeRoutes);


app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
