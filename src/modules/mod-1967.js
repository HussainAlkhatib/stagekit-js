'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1967",
  name: "Replace \"r\" with \"2\"",
  description: "Replaces every r with 2.",
  run: (value) => String(value).split("r").join("2"),
});
