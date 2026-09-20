'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2862",
  name: "Replace \"G\" with \"I\"",
  description: "Replaces every G with I.",
  run: (value) => String(value).split("G").join("I"),
});
