'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3084",
  name: "Replace \"K\" with \"l\"",
  description: "Replaces every K with l.",
  run: (value) => String(value).split("K").join("l"),
});
