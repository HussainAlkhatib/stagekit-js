'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0681",
  name: "Replace \"c\" with \"l\"",
  description: "Replaces every c with l.",
  run: (value) => String(value).split("c").join("l"),
});
