'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2872",
  name: "Replace \"G\" with \"S\"",
  description: "Replaces every G with S.",
  run: (value) => String(value).split("G").join("S"),
});
