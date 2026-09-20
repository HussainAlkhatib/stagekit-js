'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2968",
  name: "Replace \"I\" with \"r\"",
  description: "Replaces every I with r.",
  run: (value) => String(value).split("I").join("r"),
});
