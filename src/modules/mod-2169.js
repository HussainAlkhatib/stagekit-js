'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2169",
  name: "Replace \"v\" with \"l\"",
  description: "Replaces every v with l.",
  run: (value) => String(value).split("v").join("l"),
});
