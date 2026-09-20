'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0933",
  name: "Replace \"d\" with \"I\"",
  description: "Replaces every d with I.",
  run: (value) => String(value).split("d").join("I"),
});
