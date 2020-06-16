#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the mogen command.
 * @author Imtiyaz CHOUJAI
 */

"use strict";

const fs = require("fs");
// const path = require("path");
const stringify = require("json-stable-stringify-without-jsonify");

/**
 * Create .mogenrc file in the current working directory
 * @param {Object} config object that contains user's answers
 * @param {string} format The file format to write to.
 * @returns {void}
 */
function writeFile(config) {
  // default is .js
  const extname = ".js";

  writeJSConfigFile(config, `./.mogenrc${extname}`);

  console.info(
    `Successfully created .mogenrc${extname} file in ${process.cwd()}`
  );
}

/**
 * Determines sort order for object keys for json-stable-stringify
 *
 * see: https://github.com/samn/json-stable-stringify#cmp
 * @param   {Object} a The first comparison object ({key: akey, value: avalue})
 * @param   {Object} b The second comparison object ({key: bkey, value: bvalue})
 * @returns {number}   1 or -1, used in stringify cmp method
 */
function sortByKey(a, b) {
  return a.key > b.key ? 1 : -1;
}

/**
 * Writes a configuration file in JavaScript format.
 * @param {string} filePath The filename to write to.
 * @throws {Error} If an error occurs linting the config file contents.
 * @returns {void}
 * @private
 */
function writeJSConfigFile(config, filePath) {
  const stringifiedContent = `module.exports = ${stringify(config, {
    cmp: sortByKey,
    space: 4,
  })};\n`;

  fs.writeFileSync(filePath, stringifiedContent, "utf8");
}

const argv = require("yargs").command(
  "[init]",
  "Initialize config file",
  (yargs) => {
    yargs.positional("init", {
      describe: "port to bind on",
      default: true,
    });
  }
).argv;

const { init } = argv;

if (init) {
  console.log("test");
  writeFile({});
}
