'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3714",
  name: "Replace \"U\" with \"F\"",
  description: "Replaces every U with F.",
  run: (value) => String(value).split("U").join("F"),
});
