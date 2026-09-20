'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3118",
  name: "Replace \"K\" with \"U\"",
  description: "Replaces every K with U.",
  run: (value) => String(value).split("K").join("U"),
});
