'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4187",
  name: "Replace \"2\" with \"q\"",
  description: "Replaces every 2 with q.",
  run: (value) => String(value).split("2").join("q"),
});
