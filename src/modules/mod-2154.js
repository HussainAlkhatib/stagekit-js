'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2154",
  name: "Replace \"u\" with \"6\"",
  description: "Replaces every u with 6.",
  run: (value) => String(value).split("u").join("6"),
});
