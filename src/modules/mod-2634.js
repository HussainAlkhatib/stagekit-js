'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2634",
  name: "Replace \"C\" with \"Y\"",
  description: "Replaces every C with Y.",
  run: (value) => String(value).split("C").join("Y"),
});
