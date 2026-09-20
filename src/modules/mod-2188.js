'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2188",
  name: "Replace \"v\" with \"F\"",
  description: "Replaces every v with F.",
  run: (value) => String(value).split("v").join("F"),
});
