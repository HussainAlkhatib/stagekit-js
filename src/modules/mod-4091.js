'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4091",
  name: "Replace \"0\" with \"Q\"",
  description: "Replaces every 0 with Q.",
  run: (value) => String(value).split("0").join("Q"),
});
