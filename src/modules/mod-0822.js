'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0822",
  name: "Replace \"c\" with \"6\"",
  description: "Replaces every c with 6.",
  run: (value) => String(value).split("c").join("6"),
});
