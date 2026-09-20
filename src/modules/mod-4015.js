'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4015",
  name: "Replace \"Z\" with \"B\"",
  description: "Replaces every Z with B.",
  run: (value) => String(value).split("Z").join("B"),
});
