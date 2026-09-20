'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4196",
  name: "Replace \"2\" with \"z\"",
  description: "Replaces every 2 with z.",
  run: (value) => String(value).split("2").join("z"),
});
