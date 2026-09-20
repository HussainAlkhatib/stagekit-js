'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3691",
  name: "Replace \"U\" with \"i\"",
  description: "Replaces every U with i.",
  run: (value) => String(value).split("U").join("i"),
});
