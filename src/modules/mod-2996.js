'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2996",
  name: "Replace \"I\" with \"U\"",
  description: "Replaces every I with U.",
  run: (value) => String(value).split("I").join("U"),
});
