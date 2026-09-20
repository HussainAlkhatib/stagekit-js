'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3101",
  name: "Replace \"K\" with \"C\"",
  description: "Replaces every K with C.",
  run: (value) => String(value).split("K").join("C"),
});
