'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2184",
  name: "Replace \"v\" with \"B\"",
  description: "Replaces every v with B.",
  run: (value) => String(value).split("v").join("B"),
});
