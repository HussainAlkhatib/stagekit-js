'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3771",
  name: "Replace \"V\" with \"B\"",
  description: "Replaces every V with B.",
  run: (value) => String(value).split("V").join("B"),
});
