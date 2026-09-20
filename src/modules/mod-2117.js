'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2117",
  name: "Replace \"u\" with \"v\"",
  description: "Replaces every u with v.",
  run: (value) => String(value).split("u").join("v"),
});
