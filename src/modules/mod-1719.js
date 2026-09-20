'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1719",
  name: "Replace \"n\" with \"Y\"",
  description: "Replaces every n with Y.",
  run: (value) => String(value).split("n").join("Y"),
});
