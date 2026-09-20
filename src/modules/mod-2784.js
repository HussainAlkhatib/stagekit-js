'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2784",
  name: "Replace \"F\" with \"q\"",
  description: "Replaces every F with q.",
  run: (value) => String(value).split("F").join("q"),
});
