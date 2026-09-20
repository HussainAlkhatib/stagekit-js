'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1920",
  name: "Replace \"r\" with \"g\"",
  description: "Replaces every r with g.",
  run: (value) => String(value).split("r").join("g"),
});
