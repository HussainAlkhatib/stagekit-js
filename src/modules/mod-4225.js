'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4225",
  name: "Replace \"2\" with \"3\"",
  description: "Replaces every 2 with 3.",
  run: (value) => String(value).split("2").join("3"),
});
