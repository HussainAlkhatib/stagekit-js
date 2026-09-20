'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1280",
  name: "Replace \"g\" with \"M\"",
  description: "Replaces every g with M.",
  run: (value) => String(value).split("g").join("M"),
});
