'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3142",
  name: "Replace \"L\" with \"i\"",
  description: "Replaces every L with i.",
  run: (value) => String(value).split("L").join("i"),
});
