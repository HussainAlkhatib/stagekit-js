'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2390",
  name: "Replace \"y\" with \"Y\"",
  description: "Replaces every y with Y.",
  run: (value) => String(value).split("y").join("Y"),
});
