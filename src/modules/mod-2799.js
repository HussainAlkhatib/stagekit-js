'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2799",
  name: "Replace \"F\" with \"G\"",
  description: "Replaces every F with G.",
  run: (value) => String(value).split("F").join("G"),
});
