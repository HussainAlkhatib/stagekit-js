'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3105",
  name: "Replace \"K\" with \"G\"",
  description: "Replaces every K with G.",
  run: (value) => String(value).split("K").join("G"),
});
