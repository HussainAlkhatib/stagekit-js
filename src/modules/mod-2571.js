'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2571",
  name: "Replace \"B\" with \"W\"",
  description: "Replaces every B with W.",
  run: (value) => String(value).split("B").join("W"),
});
