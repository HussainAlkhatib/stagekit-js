'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1206",
  name: "Replace \"f\" with \"z\"",
  description: "Replaces every f with z.",
  run: (value) => String(value).split("f").join("z"),
});
