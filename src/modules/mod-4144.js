'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4144",
  name: "Replace \"1\" with \"I\"",
  description: "Replaces every 1 with I.",
  run: (value) => String(value).split("1").join("I"),
});
