'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1955",
  name: "Replace \"r\" with \"Q\"",
  description: "Replaces every r with Q.",
  run: (value) => String(value).split("r").join("Q"),
});
