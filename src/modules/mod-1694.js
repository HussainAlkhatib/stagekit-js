'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1694",
  name: "Replace \"n\" with \"z\"",
  description: "Replaces every n with z.",
  run: (value) => String(value).split("n").join("z"),
});
