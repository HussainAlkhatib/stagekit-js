'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4486",
  name: "Replace \"7\" with \"k\"",
  description: "Replaces every 7 with k.",
  run: (value) => String(value).split("7").join("k"),
});
