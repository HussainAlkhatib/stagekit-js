'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3830",
  name: "Replace \"W\" with \"z\"",
  description: "Replaces every W with z.",
  run: (value) => String(value).split("W").join("z"),
});
