'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0903",
  name: "Replace \"d\" with \"y\"",
  description: "Replaces every d with y.",
  run: (value) => String(value).split("d").join("y"),
});
