'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1968",
  name: "Replace \"r\" with \"3\"",
  description: "Replaces every r with 3.",
  run: (value) => String(value).split("r").join("3"),
});
