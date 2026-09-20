'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2794",
  name: "Replace \"F\" with \"A\"",
  description: "Replaces every F with A.",
  run: (value) => String(value).split("F").join("A"),
});
