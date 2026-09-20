'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1936",
  name: "Replace \"r\" with \"x\"",
  description: "Replaces every r with x.",
  run: (value) => String(value).split("r").join("x"),
});
