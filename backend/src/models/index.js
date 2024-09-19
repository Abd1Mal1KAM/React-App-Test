"use strict";

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";
import { fileURLToPath } from "url"; // Required to resolve __filename in ES modules
import configData from "../../config/config.json" assert { type: "json" }; // Ensure correct JSON import

// Replicating __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = configData[env]; // Read the config based on the environment
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    import(modelPath)
      .then((module) => {
        const model = module.default;
        db[model.name] = model;  // Assign the model to db object here
      })
      .catch((err) => {
        console.error(`Error loading model at ${modelPath}:`, err);
      });
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
