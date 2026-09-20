'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2489",
  name: "Replace \"A\" with \"B\"",
  description: "Replaces every A with B.",
  run: (value) => String(value).split("A").join("B"),
});
