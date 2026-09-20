'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1957",
  name: "Replace \"r\" with \"S\"",
  description: "Replaces every r with S.",
  run: (value) => String(value).split("r").join("S"),
});
