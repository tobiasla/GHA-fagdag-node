/** @type {import('jest').Config} */
const config = {
  verbose: true,
  reporters: ["default", ["jest-ctrf-json-reporter", {}]],
};

module.exports = config;
