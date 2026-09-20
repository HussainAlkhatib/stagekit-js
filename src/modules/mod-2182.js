'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2182",
  name: "Replace \"v\" with \"z\"",
  description: "Replaces every v with z.",
  run: (value) => String(value).split("v").join("z"),
});
