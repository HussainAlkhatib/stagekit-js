'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3742",
  name: "Replace \"U\" with \"8\"",
  description: "Replaces every U with 8.",
  run: (value) => String(value).split("U").join("8"),
});
