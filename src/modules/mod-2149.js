'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2149",
  name: "Replace \"u\" with \"1\"",
  description: "Replaces every u with 1.",
  run: (value) => String(value).split("u").join("1"),
});
