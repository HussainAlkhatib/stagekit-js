'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3586",
  name: "Replace \"S\" with \"z\"",
  description: "Replaces every S with z.",
  run: (value) => String(value).split("S").join("z"),
});
