'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2798",
  name: "Replace \"F\" with \"E\"",
  description: "Replaces every F with E.",
  run: (value) => String(value).split("F").join("E"),
});
