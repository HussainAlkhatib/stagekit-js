'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1979",
  name: "Replace \"s\" with \"e\"",
  description: "Replaces every s with e.",
  run: (value) => String(value).split("s").join("e"),
});
