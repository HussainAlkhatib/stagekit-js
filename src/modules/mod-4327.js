'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4327",
  name: "Replace \"4\" with \"I\"",
  description: "Replaces every 4 with I.",
  run: (value) => String(value).split("4").join("I"),
});
