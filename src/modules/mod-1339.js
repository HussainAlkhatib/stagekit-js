'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1339",
  name: "Replace \"h\" with \"K\"",
  description: "Replaces every h with K.",
  run: (value) => String(value).split("h").join("K"),
});
