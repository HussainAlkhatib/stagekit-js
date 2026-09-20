'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3117",
  name: "Replace \"K\" with \"T\"",
  description: "Replaces every K with T.",
  run: (value) => String(value).split("K").join("T"),
});
