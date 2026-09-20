'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3002",
  name: "Replace \"I\" with \"0\"",
  description: "Replaces every I with 0.",
  run: (value) => String(value).split("I").join("0"),
});
