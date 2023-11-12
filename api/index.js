// entry point of the api

const express = require('express');

const app = express();

console.log(app)

app.listen(5000, () => {
      console.log('server listening on port 5000')
})