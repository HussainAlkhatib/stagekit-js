'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0771",
  name: "Replace \"c\" with \"P\"",
  description: "Replaces every c with P.",
  run: (value) => String(value).split("c").join("P"),
});
