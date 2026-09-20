'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3622",
  name: "Replace \"T\" with \"a\"",
  description: "Replaces every T with a.",
  run: (value) => String(value).split("T").join("a"),
});
