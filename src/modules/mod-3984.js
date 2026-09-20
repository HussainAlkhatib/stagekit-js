'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3984",
  name: "Replace \"Y\" with \"6\"",
  description: "Replaces every Y with 6.",
  run: (value) => String(value).split("Y").join("6"),
});
