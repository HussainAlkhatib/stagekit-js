'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2814",
  name: "Replace \"F\" with \"V\"",
  description: "Replaces every F with V.",
  run: (value) => String(value).split("F").join("V"),
});
