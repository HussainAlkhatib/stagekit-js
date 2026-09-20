'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1349",
  name: "Replace \"h\" with \"U\"",
  description: "Replaces every h with U.",
  run: (value) => String(value).split("h").join("U"),
});
