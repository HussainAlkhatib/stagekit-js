'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2776",
  name: "Replace \"F\" with \"i\"",
  description: "Replaces every F with i.",
  run: (value) => String(value).split("F").join("i"),
});
