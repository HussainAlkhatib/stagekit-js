'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2743",
  name: "Replace \"E\" with \"L\"",
  description: "Replaces every E with L.",
  run: (value) => String(value).split("E").join("L"),
});
