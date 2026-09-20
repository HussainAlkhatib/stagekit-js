'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4077",
  name: "Replace \"0\" with \"C\"",
  description: "Replaces every 0 with C.",
  run: (value) => String(value).split("0").join("C"),
});
