'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0684",
  name: "Replace \"c\" with \"m\"",
  description: "Replaces every c with m.",
  run: (value) => String(value).split("c").join("m"),
});
