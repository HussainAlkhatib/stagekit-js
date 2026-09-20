'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4602",
  name: "Replace \"9\" with \"e\"",
  description: "Replaces every 9 with e.",
  run: (value) => String(value).split("9").join("e"),
});
