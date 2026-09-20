'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2196",
  name: "Replace \"v\" with \"N\"",
  description: "Replaces every v with N.",
  run: (value) => String(value).split("v").join("N"),
});
