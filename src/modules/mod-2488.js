'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2488",
  name: "Replace \"A\" with \"z\"",
  description: "Replaces every A with z.",
  run: (value) => String(value).split("A").join("z"),
});
