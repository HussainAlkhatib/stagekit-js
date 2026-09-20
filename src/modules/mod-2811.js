'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2811",
  name: "Replace \"F\" with \"S\"",
  description: "Replaces every F with S.",
  run: (value) => String(value).split("F").join("S"),
});
