'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1330",
  name: "Replace \"h\" with \"B\"",
  description: "Replaces every h with B.",
  run: (value) => String(value).split("h").join("B"),
});
