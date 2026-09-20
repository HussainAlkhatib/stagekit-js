'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3281",
  name: "Replace \"N\" with \"z\"",
  description: "Replaces every N with z.",
  run: (value) => String(value).split("N").join("z"),
});
