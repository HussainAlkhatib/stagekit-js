'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2365",
  name: "Replace \"y\" with \"z\"",
  description: "Replaces every y with z.",
  run: (value) => String(value).split("y").join("z"),
});
