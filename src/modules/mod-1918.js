'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1918",
  name: "Replace \"r\" with \"e\"",
  description: "Replaces every r with e.",
  run: (value) => String(value).split("r").join("e"),
});
