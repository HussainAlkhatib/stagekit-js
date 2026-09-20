'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3039",
  name: "Replace \"J\" with \"B\"",
  description: "Replaces every J with B.",
  run: (value) => String(value).split("J").join("B"),
});
