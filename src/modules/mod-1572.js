'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1572",
  name: "Replace \"l\" with \"z\"",
  description: "Replaces every l with z.",
  run: (value) => String(value).split("l").join("z"),
});
