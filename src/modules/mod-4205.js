'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4205",
  name: "Replace \"2\" with \"I\"",
  description: "Replaces every 2 with I.",
  run: (value) => String(value).split("2").join("I"),
});
