'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2113",
  name: "Replace \"u\" with \"q\"",
  description: "Replaces every u with q.",
  run: (value) => String(value).split("u").join("q"),
});
