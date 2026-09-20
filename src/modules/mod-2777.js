'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2777",
  name: "Replace \"F\" with \"j\"",
  description: "Replaces every F with j.",
  run: (value) => String(value).split("F").join("j"),
});
