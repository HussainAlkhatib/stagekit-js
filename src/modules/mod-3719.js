'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3719",
  name: "Replace \"U\" with \"K\"",
  description: "Replaces every U with K.",
  run: (value) => String(value).split("U").join("K"),
});
