'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1289",
  name: "Replace \"g\" with \"V\"",
  description: "Replaces every g with V.",
  run: (value) => String(value).split("g").join("V"),
});
