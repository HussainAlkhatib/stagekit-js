'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4410",
  name: "Replace \"5\" with \"4\"",
  description: "Replaces every 5 with 4.",
  run: (value) => String(value).split("5").join("4"),
});
