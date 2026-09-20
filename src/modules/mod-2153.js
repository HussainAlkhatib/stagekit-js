'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2153",
  name: "Replace \"u\" with \"5\"",
  description: "Replaces every u with 5.",
  run: (value) => String(value).split("u").join("5"),
});
