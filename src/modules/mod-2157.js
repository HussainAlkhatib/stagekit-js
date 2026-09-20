'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2157",
  name: "Replace \"u\" with \"9\"",
  description: "Replaces every u with 9.",
  run: (value) => String(value).split("u").join("9"),
});
