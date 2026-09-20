'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3122",
  name: "Replace \"K\" with \"Y\"",
  description: "Replaces every K with Y.",
  run: (value) => String(value).split("K").join("Y"),
});
