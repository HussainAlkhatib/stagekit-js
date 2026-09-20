'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3120",
  name: "Replace \"K\" with \"W\"",
  description: "Replaces every K with W.",
  run: (value) => String(value).split("K").join("W"),
});
