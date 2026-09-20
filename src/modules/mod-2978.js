'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2978",
  name: "Replace \"I\" with \"B\"",
  description: "Replaces every I with B.",
  run: (value) => String(value).split("I").join("B"),
});
