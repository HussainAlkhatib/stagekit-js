'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2815",
  name: "Replace \"F\" with \"W\"",
  description: "Replaces every F with W.",
  run: (value) => String(value).split("F").join("W"),
});
