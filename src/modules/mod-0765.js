'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0765",
  name: "Replace \"c\" with \"N\"",
  description: "Replaces every c with N.",
  run: (value) => String(value).split("c").join("N"),
});
