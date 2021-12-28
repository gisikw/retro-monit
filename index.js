const { execSync } = require('child_process');
const express = require('express');
const app = express();
app.use(express.static('client/build'));

// const REMOTE_HOST = false;
const REMOTE_HOST = 'pi@retropie.local';
const PORT = 8000;
const SCREENSHOT_CACHE = 2e3

let SCREENSHOT_COMMAND = 'raspi2png -w 480 -s';
if (REMOTE_HOST) SCREENSHOT_COMMAND = `ssh ${REMOTE_HOST} '${SCREENSHOT_COMMAND}'`;

let screenshotTimestamp = 0;
let screenshot;
app.get('/screenshot.png', (req, res) => {
  const now = Date.now();
  if (now - screenshotTimestamp > SCREENSHOT_CACHE) {
    screenshot = execSync(SCREENSHOT_COMMAND);
    screenshotTimestamp = Date.now();
  }
  res.setHeader('content-type', 'image/png');
  res.send(screenshot);
});

app.listen(PORT, () => {
  console.log(`Retro Monitor listening at http://localhost:${PORT}`)
})
