'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3077",
  name: "Replace \"K\" with \"e\"",
  description: "Replaces every K with e.",
  run: (value) => String(value).split("K").join("e"),
});
