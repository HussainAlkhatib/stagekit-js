'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3096",
  name: "Replace \"K\" with \"x\"",
  description: "Replaces every K with x.",
  run: (value) => String(value).split("K").join("x"),
});
