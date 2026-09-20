'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4388",
  name: "Replace \"5\" with \"I\"",
  description: "Replaces every 5 with I.",
  run: (value) => String(value).split("5").join("I"),
});
