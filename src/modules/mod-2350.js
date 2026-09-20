'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2350",
  name: "Replace \"y\" with \"j\"",
  description: "Replaces every y with j.",
  run: (value) => String(value).split("y").join("j"),
});
