'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4289",
  name: "Replace \"3\" with \"6\"",
  description: "Replaces every 3 with 6.",
  run: (value) => String(value).split("3").join("6"),
});
