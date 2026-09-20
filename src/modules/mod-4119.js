'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4119",
  name: "Replace \"1\" with \"j\"",
  description: "Replaces every 1 with j.",
  run: (value) => String(value).split("1").join("j"),
});
