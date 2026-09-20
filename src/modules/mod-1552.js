'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1552",
  name: "Replace \"l\" with \"e\"",
  description: "Replaces every l with e.",
  run: (value) => String(value).split("l").join("e"),
});
