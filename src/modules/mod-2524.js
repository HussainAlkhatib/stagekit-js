'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2524",
  name: "Replace \"B\" with \"a\"",
  description: "Replaces every B with a.",
  run: (value) => String(value).split("B").join("a"),
});
