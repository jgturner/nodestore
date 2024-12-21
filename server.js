const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', data: [], message: 'Weclome to the nodestore' });
});

app.listen(port, () => {
  console.log(`Emoji store listening on port ${port}`);
});
