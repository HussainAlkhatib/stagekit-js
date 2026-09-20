'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3079",
  name: "Replace \"K\" with \"g\"",
  description: "Replaces every K with g.",
  run: (value) => String(value).split("K").join("g"),
});
