'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2108",
  name: "Replace \"u\" with \"l\"",
  description: "Replaces every u with l.",
  run: (value) => String(value).split("u").join("l"),
});
