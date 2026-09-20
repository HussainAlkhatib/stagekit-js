'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0615",
  name: "Replace \"b\" with \"Y\"",
  description: "Replaces every b with Y.",
  run: (value) => String(value).split("b").join("Y"),
});
