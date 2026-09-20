'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3732",
  name: "Replace \"U\" with \"Y\"",
  description: "Replaces every U with Y.",
  run: (value) => String(value).split("U").join("Y"),
});
