'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3647",
  name: "Replace \"T\" with \"z\"",
  description: "Replaces every T with z.",
  run: (value) => String(value).split("T").join("z"),
});
