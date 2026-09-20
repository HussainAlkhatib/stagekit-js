'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0537",
  name: "Replace \"b\" with \"y\"",
  description: "Replaces every b with y.",
  run: (value) => String(value).split("b").join("y"),
});
