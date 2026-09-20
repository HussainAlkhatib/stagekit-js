'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1696",
  name: "Replace \"n\" with \"B\"",
  description: "Replaces every n with B.",
  run: (value) => String(value).split("n").join("B"),
});
