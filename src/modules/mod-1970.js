'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1970",
  name: "Replace \"r\" with \"5\"",
  description: "Replaces every r with 5.",
  run: (value) => String(value).split("r").join("5"),
});
