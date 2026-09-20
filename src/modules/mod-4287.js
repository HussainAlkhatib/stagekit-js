'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4287",
  name: "Replace \"3\" with \"4\"",
  description: "Replaces every 3 with 4.",
  run: (value) => String(value).split("3").join("4"),
});
