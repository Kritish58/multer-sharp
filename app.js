const express = require('express');
const chalk = require('chalk');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(chalk.bold.yellow('server is running on port ', PORT));
});
