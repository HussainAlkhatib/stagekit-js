'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3108",
  name: "Replace \"K\" with \"J\"",
  description: "Replaces every K with J.",
  run: (value) => String(value).split("K").join("J"),
});
