'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2796",
  name: "Replace \"F\" with \"C\"",
  description: "Replaces every F with C.",
  run: (value) => String(value).split("F").join("C"),
});
