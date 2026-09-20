'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4655",
  name: "Replace \"9\" with \"5\"",
  description: "Replaces every 9 with 5.",
  run: (value) => String(value).split("9").join("5"),
});
