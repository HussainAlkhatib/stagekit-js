'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0540",
  name: "Replace \"b\" with \"z\"",
  description: "Replaces every b with z.",
  run: (value) => String(value).split("b").join("z"),
});
