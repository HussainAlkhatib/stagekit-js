'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1984",
  name: "Replace \"s\" with \"j\"",
  description: "Replaces every s with j.",
  run: (value) => String(value).split("s").join("j"),
});
