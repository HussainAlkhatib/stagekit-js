'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1239",
  name: "Replace \"f\" with \"6\"",
  description: "Replaces every f with 6.",
  run: (value) => String(value).split("f").join("6"),
});
