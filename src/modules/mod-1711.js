'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1711",
  name: "Replace \"n\" with \"Q\"",
  description: "Replaces every n with Q.",
  run: (value) => String(value).split("n").join("Q"),
});
