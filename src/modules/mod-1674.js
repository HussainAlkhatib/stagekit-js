'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1674",
  name: "Replace \"n\" with \"e\"",
  description: "Replaces every n with e.",
  run: (value) => String(value).split("n").join("e"),
});
