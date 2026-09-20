'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3728",
  name: "Replace \"U\" with \"T\"",
  description: "Replaces every U with T.",
  run: (value) => String(value).split("U").join("T"),
});
