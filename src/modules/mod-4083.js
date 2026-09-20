'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4083",
  name: "Replace \"0\" with \"I\"",
  description: "Replaces every 0 with I.",
  run: (value) => String(value).split("0").join("I"),
});
