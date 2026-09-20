'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2243",
  name: "Replace \"w\" with \"z\"",
  description: "Replaces every w with z.",
  run: (value) => String(value).split("w").join("z"),
});
