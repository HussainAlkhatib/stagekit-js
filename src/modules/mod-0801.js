'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0801",
  name: "Replace \"c\" with \"Z\"",
  description: "Replaces every c with Z.",
  run: (value) => String(value).split("c").join("Z"),
});
