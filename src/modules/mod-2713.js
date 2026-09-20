'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2713",
  name: "Replace \"E\" with \"g\"",
  description: "Replaces every E with g.",
  run: (value) => String(value).split("E").join("g"),
});
