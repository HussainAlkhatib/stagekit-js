'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1290",
  name: "Replace \"g\" with \"W\"",
  description: "Replaces every g with W.",
  run: (value) => String(value).split("g").join("W"),
});
