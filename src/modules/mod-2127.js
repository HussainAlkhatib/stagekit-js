'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2127",
  name: "Replace \"u\" with \"F\"",
  description: "Replaces every u with F.",
  run: (value) => String(value).split("u").join("F"),
});
