'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1814",
  name: "Replace \"p\" with \"x\"",
  description: "Replaces every p with x.",
  run: (value) => String(value).split("p").join("x"),
});
