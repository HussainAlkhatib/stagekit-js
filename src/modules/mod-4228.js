'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4228",
  name: "Replace \"2\" with \"6\"",
  description: "Replaces every 2 with 6.",
  run: (value) => String(value).split("2").join("6"),
});
