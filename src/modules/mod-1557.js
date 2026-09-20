'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1557",
  name: "Replace \"l\" with \"j\"",
  description: "Replaces every l with j.",
  run: (value) => String(value).split("l").join("j"),
});
