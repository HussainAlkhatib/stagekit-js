'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4249",
  name: "Replace \"3\" with \"r\"",
  description: "Replaces every 3 with r.",
  run: (value) => String(value).split("3").join("r"),
});
