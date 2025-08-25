const express = require('express');
const swaggerConfig = require('./src/config/swagger.config');
require('dotenv').config();


function main() {
  const app = express();
  const port = process.env.PORT;

  require('./src/config/mongoose.config');
  swaggerConfig(app);
  app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
  })
}

main();