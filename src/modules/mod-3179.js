'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3179",
  name: "Replace \"L\" with \"U\"",
  description: "Replaces every L with U.",
  run: (value) => String(value).split("L").join("U"),
});
