'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3436",
  name: "Replace \"P\" with \"7\"",
  description: "Replaces every P with 7.",
  run: (value) => String(value).split("P").join("7"),
});
