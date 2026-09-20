'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0759",
  name: "Replace \"c\" with \"L\"",
  description: "Replaces every c with L.",
  run: (value) => String(value).split("c").join("L"),
});
