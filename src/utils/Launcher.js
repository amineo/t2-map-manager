import { ChildProcess, spawn, SpawnOptions } from "child_process";
import { EventEmitter } from "events";
import { createWriteStream, existsSync } from "fs";
const path = require("path");

import { EOL } from "os";
import { delimiter, dirname, isAbsolute, join, resolve } from "path";
import { pipeline } from "stream";
import { promisify } from "util";

export async function LaunchGame() {
  const game = spawn("C:/Dynamix/Tribes2/GameData/SierraUp.exe", {
    cwd: "C:/Dynamix/Tribes2/GameData",
  });

  game.stdout.on("data", (data) => {
    console.log(`stdout:\n${data}`);
  });

  game.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return game;
}
