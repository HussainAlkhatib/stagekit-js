'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0834",
  name: "Replace \"d\" with \"a\"",
  description: "Replaces every d with a.",
  run: (value) => String(value).split("d").join("a"),
});
