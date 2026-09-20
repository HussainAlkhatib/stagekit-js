'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1613",
  name: "Replace \"m\" with \"e\"",
  description: "Replaces every m with e.",
  run: (value) => String(value).split("m").join("e"),
});
