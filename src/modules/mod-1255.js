'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1255",
  name: "Replace \"g\" with \"n\"",
  description: "Replaces every g with n.",
  run: (value) => String(value).split("g").join("n"),
});
