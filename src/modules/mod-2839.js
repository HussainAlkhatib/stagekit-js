'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2839",
  name: "Replace \"G\" with \"k\"",
  description: "Replaces every G with k.",
  run: (value) => String(value).split("G").join("k"),
});
