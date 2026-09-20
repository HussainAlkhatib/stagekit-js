'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2114",
  name: "Replace \"u\" with \"r\"",
  description: "Replaces every u with r.",
  run: (value) => String(value).split("u").join("r"),
});
