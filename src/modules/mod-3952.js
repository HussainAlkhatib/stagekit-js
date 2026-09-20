'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3952",
  name: "Replace \"Y\" with \"z\"",
  description: "Replaces every Y with z.",
  run: (value) => String(value).split("Y").join("z"),
});
