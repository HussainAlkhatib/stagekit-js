'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1642",
  name: "Replace \"m\" with \"I\"",
  description: "Replaces every m with I.",
  run: (value) => String(value).split("m").join("I"),
});
