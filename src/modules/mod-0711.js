'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0711",
  name: "Replace \"c\" with \"v\"",
  description: "Replaces every c with v.",
  run: (value) => String(value).split("c").join("v"),
});
