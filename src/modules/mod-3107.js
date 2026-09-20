'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3107",
  name: "Replace \"K\" with \"I\"",
  description: "Replaces every K with I.",
  run: (value) => String(value).split("K").join("I"),
});
