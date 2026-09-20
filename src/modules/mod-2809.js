'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2809",
  name: "Replace \"F\" with \"Q\"",
  description: "Replaces every F with Q.",
  run: (value) => String(value).split("F").join("Q"),
});
