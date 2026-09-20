'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3093",
  name: "Replace \"K\" with \"u\"",
  description: "Replaces every K with u.",
  run: (value) => String(value).split("K").join("u"),
});
