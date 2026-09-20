'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0996",
  name: "Replace \"d\" with \"3\"",
  description: "Replaces every d with 3.",
  run: (value) => String(value).split("d").join("3"),
});
