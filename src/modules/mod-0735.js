'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0735",
  name: "Replace \"c\" with \"D\"",
  description: "Replaces every c with D.",
  run: (value) => String(value).split("c").join("D"),
});
