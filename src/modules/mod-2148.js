'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2148",
  name: "Replace \"u\" with \"0\"",
  description: "Replaces every u with 0.",
  run: (value) => String(value).split("u").join("0"),
});
