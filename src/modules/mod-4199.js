'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4199",
  name: "Replace \"2\" with \"C\"",
  description: "Replaces every 2 with C.",
  run: (value) => String(value).split("2").join("C"),
});
