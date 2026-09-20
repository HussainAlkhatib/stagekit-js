'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3954",
  name: "Replace \"Y\" with \"B\"",
  description: "Replaces every Y with B.",
  run: (value) => String(value).split("Y").join("B"),
});
