'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3378",
  name: "Replace \"P\" with \"a\"",
  description: "Replaces every P with a.",
  run: (value) => String(value).split("P").join("a"),
});
