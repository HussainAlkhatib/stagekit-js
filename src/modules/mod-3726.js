'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3726",
  name: "Replace \"U\" with \"R\"",
  description: "Replaces every U with R.",
  run: (value) => String(value).split("U").join("R"),
});
