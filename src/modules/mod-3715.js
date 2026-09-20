'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3715",
  name: "Replace \"U\" with \"G\"",
  description: "Replaces every U with G.",
  run: (value) => String(value).split("U").join("G"),
});
