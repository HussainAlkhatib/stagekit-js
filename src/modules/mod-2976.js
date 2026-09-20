'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2976",
  name: "Replace \"I\" with \"z\"",
  description: "Replaces every I with z.",
  run: (value) => String(value).split("I").join("z"),
});
