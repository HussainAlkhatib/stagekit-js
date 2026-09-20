'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2813",
  name: "Replace \"F\" with \"U\"",
  description: "Replaces every F with U.",
  run: (value) => String(value).split("F").join("U"),
});
