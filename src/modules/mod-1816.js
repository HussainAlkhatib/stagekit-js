'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1816",
  name: "Replace \"p\" with \"z\"",
  description: "Replaces every p with z.",
  run: (value) => String(value).split("p").join("z"),
});
