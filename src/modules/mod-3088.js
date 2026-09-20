'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3088",
  name: "Replace \"K\" with \"p\"",
  description: "Replaces every K with p.",
  run: (value) => String(value).split("K").join("p"),
});
