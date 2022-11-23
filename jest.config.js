/** @type {import('jest').Config} */
const config = {
  verbose: true,
  "\\.(css|scss)$": "identity-obj-proxy",
};

module.exports = config;
