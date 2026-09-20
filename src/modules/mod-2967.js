'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2967",
  name: "Replace \"I\" with \"q\"",
  description: "Replaces every I with q.",
  run: (value) => String(value).split("I").join("q"),
});
