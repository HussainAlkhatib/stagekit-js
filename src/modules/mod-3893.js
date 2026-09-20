'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3893",
  name: "Replace \"X\" with \"B\"",
  description: "Replaces every X with B.",
  run: (value) => String(value).split("X").join("B"),
});
