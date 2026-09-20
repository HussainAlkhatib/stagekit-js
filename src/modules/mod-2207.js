'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2207",
  name: "Replace \"v\" with \"Y\"",
  description: "Replaces every v with Y.",
  run: (value) => String(value).split("v").join("Y"),
});
