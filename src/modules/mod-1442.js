'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1442",
  name: "Replace \"j\" with \"r\"",
  description: "Replaces every j with r.",
  run: (value) => String(value).split("j").join("r"),
});
