const { execSync } = require('child_process');
const express = require('express');
const app = express();

// const REMOTE_HOST = false;
const REMOTE_HOST = 'pi@retropie.local';
const PORT = 80;

let SCREENSHOT_COMMAND = 'raspi2png -w 480 -s';
if (REMOTE_HOST) SCREENSHOT_COMMAND = `ssh ${REMOTE_HOST} '${SCREENSHOT_COMMAND}'`;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Retro Monitor</title>
  </head>
  <body>
    <h1>Retro Monitor</h1>
    <img src='/screenshot.png' style="width: 480px; margin: 0 auto">
  </body>
</html>
  `);
})

app.get('/screenshot.png', (req, res) => {
  res.setHeader('content-type', 'image/png');
  res.send(execSync(SCREENSHOT_COMMAND));
  // res.send(execSync("${SCREENSHOT_COMMAND} > img.png"));
  // res.sendFile(`${process.cwd()}/img.png`);
});

app.listen(PORT, () => {
  console.log(`Retro Monitor listening at http://localhost:${PORT}`)
})
