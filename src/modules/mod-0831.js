'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0831",
  name: "Replace \"c\" with \"9\"",
  description: "Replaces every c with 9.",
  run: (value) => String(value).split("c").join("9"),
});
