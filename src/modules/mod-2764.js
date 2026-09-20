'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2764",
  name: "Replace \"E\" with \"6\"",
  description: "Replaces every E with 6.",
  run: (value) => String(value).split("E").join("6"),
});
