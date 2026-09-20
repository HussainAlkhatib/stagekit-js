'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2853",
  name: "Replace \"G\" with \"y\"",
  description: "Replaces every G with y.",
  run: (value) => String(value).split("G").join("y"),
});
