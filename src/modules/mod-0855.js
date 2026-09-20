'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0855",
  name: "Replace \"d\" with \"i\"",
  description: "Replaces every d with i.",
  run: (value) => String(value).split("d").join("i"),
});
