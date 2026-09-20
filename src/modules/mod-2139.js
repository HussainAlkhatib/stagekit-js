'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2139",
  name: "Replace \"u\" with \"R\"",
  description: "Replaces every u with R.",
  run: (value) => String(value).split("u").join("R"),
});
