'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3082",
  name: "Replace \"K\" with \"j\"",
  description: "Replaces every K with j.",
  run: (value) => String(value).split("K").join("j"),
});
