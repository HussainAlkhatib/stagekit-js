'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1650",
  name: "Replace \"m\" with \"Q\"",
  description: "Replaces every m with Q.",
  run: (value) => String(value).split("m").join("Q"),
});
