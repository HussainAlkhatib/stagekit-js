'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1319",
  name: "Replace \"h\" with \"q\"",
  description: "Replaces every h with q.",
  run: (value) => String(value).split("h").join("q"),
});
