'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3569",
  name: "Replace \"S\" with \"i\"",
  description: "Replaces every S with i.",
  run: (value) => String(value).split("S").join("i"),
});
