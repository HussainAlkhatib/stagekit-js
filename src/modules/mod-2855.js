'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2855",
  name: "Replace \"G\" with \"A\"",
  description: "Replaces every G with A.",
  run: (value) => String(value).split("G").join("A"),
});
