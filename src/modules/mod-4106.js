'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4106",
  name: "Replace \"0\" with \"6\"",
  description: "Replaces every 0 with 6.",
  run: (value) => String(value).split("0").join("6"),
});
