'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2008",
  name: "Replace \"s\" with \"I\"",
  description: "Replaces every s with I.",
  run: (value) => String(value).split("s").join("I"),
});
