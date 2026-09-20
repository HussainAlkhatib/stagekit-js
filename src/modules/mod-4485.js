'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4485",
  name: "Replace \"7\" with \"j\"",
  description: "Replaces every 7 with j.",
  run: (value) => String(value).split("7").join("j"),
});
