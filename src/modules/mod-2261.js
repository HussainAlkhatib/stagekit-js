'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2261",
  name: "Replace \"w\" with \"R\"",
  description: "Replaces every w with R.",
  run: (value) => String(value).split("w").join("R"),
});
