'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3114",
  name: "Replace \"K\" with \"Q\"",
  description: "Replaces every K with Q.",
  run: (value) => String(value).split("K").join("Q"),
});
