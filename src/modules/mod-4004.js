'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4004",
  name: "Replace \"Z\" with \"q\"",
  description: "Replaces every Z with q.",
  run: (value) => String(value).split("Z").join("q"),
});
