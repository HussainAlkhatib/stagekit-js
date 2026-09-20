'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2095",
  name: "Replace \"t\" with \"8\"",
  description: "Replaces every t with 8.",
  run: (value) => String(value).split("t").join("8"),
});
