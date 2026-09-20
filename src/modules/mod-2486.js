'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2486",
  name: "Replace \"A\" with \"x\"",
  description: "Replaces every A with x.",
  run: (value) => String(value).split("A").join("x"),
});
