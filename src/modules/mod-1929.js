'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1929",
  name: "Replace \"r\" with \"p\"",
  description: "Replaces every r with p.",
  run: (value) => String(value).split("r").join("p"),
});
