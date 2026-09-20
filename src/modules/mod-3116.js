'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3116",
  name: "Replace \"K\" with \"S\"",
  description: "Replaces every K with S.",
  run: (value) => String(value).split("K").join("S"),
});
