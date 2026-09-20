'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2197",
  name: "Replace \"v\" with \"O\"",
  description: "Replaces every v with O.",
  run: (value) => String(value).split("v").join("O"),
});
