'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1938",
  name: "Replace \"r\" with \"z\"",
  description: "Replaces every r with z.",
  run: (value) => String(value).split("r").join("z"),
});
