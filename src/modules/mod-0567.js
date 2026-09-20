'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0567",
  name: "Replace \"b\" with \"I\"",
  description: "Replaces every b with I.",
  run: (value) => String(value).split("b").join("I"),
});
