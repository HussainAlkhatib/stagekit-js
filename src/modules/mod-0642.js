'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0642",
  name: "Replace \"b\" with \"7\"",
  description: "Replaces every b with 7.",
  run: (value) => String(value).split("b").join("7"),
});
