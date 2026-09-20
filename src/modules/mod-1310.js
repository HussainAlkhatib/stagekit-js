'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1310",
  name: "Replace \"h\" with \"g\"",
  description: "Replaces every h with g.",
  run: (value) => String(value).split("h").join("g"),
});
