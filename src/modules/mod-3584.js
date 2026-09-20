'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3584",
  name: "Replace \"S\" with \"x\"",
  description: "Replaces every S with x.",
  run: (value) => String(value).split("S").join("x"),
});
