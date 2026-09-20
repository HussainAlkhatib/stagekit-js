'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1658",
  name: "Replace \"m\" with \"Y\"",
  description: "Replaces every m with Y.",
  run: (value) => String(value).split("m").join("Y"),
});
