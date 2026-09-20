'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1320",
  name: "Replace \"h\" with \"r\"",
  description: "Replaces every h with r.",
  run: (value) => String(value).split("h").join("r"),
});
