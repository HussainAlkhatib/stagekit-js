'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0449",
  name: "Replace \"b\" with \"a\"",
  description: "Replaces every b with a.",
  run: (value) => String(value).split("b").join("a"),
});
