'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2147",
  name: "Replace \"u\" with \"Z\"",
  description: "Replaces every u with Z.",
  run: (value) => String(value).split("u").join("Z"),
});
