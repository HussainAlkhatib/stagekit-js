'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0777",
  name: "Replace \"c\" with \"R\"",
  description: "Replaces every c with R.",
  run: (value) => String(value).split("c").join("R"),
});
