'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2410",
  name: "Replace \"z\" with \"i\"",
  description: "Replaces every z with i.",
  run: (value) => String(value).split("z").join("i"),
});
