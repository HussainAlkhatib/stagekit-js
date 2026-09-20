'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4137",
  name: "Replace \"1\" with \"B\"",
  description: "Replaces every 1 with B.",
  run: (value) => String(value).split("1").join("B"),
});
