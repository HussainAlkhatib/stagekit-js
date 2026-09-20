'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4241",
  name: "Replace \"3\" with \"j\"",
  description: "Replaces every 3 with j.",
  run: (value) => String(value).split("3").join("j"),
});
