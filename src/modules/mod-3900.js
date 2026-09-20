'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3900",
  name: "Replace \"X\" with \"I\"",
  description: "Replaces every X with I.",
  run: (value) => String(value).split("X").join("I"),
});
