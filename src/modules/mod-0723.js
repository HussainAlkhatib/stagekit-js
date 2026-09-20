'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0723",
  name: "Replace \"c\" with \"z\"",
  description: "Replaces every c with z.",
  run: (value) => String(value).split("c").join("z"),
});
