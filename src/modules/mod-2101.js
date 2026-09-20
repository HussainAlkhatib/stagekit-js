'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2101",
  name: "Replace \"u\" with \"e\"",
  description: "Replaces every u with e.",
  run: (value) => String(value).split("u").join("e"),
});
