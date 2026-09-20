'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4102",
  name: "Replace \"0\" with \"2\"",
  description: "Replaces every 0 with 2.",
  run: (value) => String(value).split("0").join("2"),
});
