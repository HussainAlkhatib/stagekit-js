'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4257",
  name: "Replace \"3\" with \"z\"",
  description: "Replaces every 3 with z.",
  run: (value) => String(value).split("3").join("z"),
});
