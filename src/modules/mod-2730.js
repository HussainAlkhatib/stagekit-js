'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2730",
  name: "Replace \"E\" with \"x\"",
  description: "Replaces every E with x.",
  run: (value) => String(value).split("E").join("x"),
});
