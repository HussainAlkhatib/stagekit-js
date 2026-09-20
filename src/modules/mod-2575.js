'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2575",
  name: "Replace \"B\" with \"0\"",
  description: "Replaces every B with 0.",
  run: (value) => String(value).split("B").join("0"),
});
