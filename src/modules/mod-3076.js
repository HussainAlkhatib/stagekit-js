'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3076",
  name: "Replace \"K\" with \"d\"",
  description: "Replaces every K with d.",
  run: (value) => String(value).split("K").join("d"),
});
