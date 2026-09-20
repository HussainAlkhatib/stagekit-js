'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2081",
  name: "Replace \"t\" with \"U\"",
  description: "Replaces every t with U.",
  run: (value) => String(value).split("t").join("U"),
});
