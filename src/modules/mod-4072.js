'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4072",
  name: "Replace \"0\" with \"x\"",
  description: "Replaces every 0 with x.",
  run: (value) => String(value).split("0").join("x"),
});
