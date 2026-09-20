'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2044",
  name: "Replace \"t\" with \"i\"",
  description: "Replaces every t with i.",
  run: (value) => String(value).split("t").join("i"),
});
