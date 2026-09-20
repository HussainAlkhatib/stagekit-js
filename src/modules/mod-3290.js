'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3290",
  name: "Replace \"N\" with \"I\"",
  description: "Replaces every N with I.",
  run: (value) => String(value).split("N").join("I"),
});
