'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2235",
  name: "Replace \"w\" with \"q\"",
  description: "Replaces every w with q.",
  run: (value) => String(value).split("w").join("q"),
});
