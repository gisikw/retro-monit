# Tasks

## Options
- Remove the dependency on raspi2png
- Start logging at some frequency (what game is active, is there active controller input, etc)
- How might we disable emulationstation and whatever it may have spawned, so we can write to /dev/fb0 ourselves (messages, scheduled downtime, etc)
- Share the screenshot cache value between client and server

## Doing

## Done
- Cache screenshot so it can be requested multiple times without spamming the framebuffer with reads
- Make a placeholder web interface
