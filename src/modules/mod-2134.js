'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2134",
  name: "Replace \"u\" with \"M\"",
  description: "Replaces every u with M.",
  run: (value) => String(value).split("u").join("M"),
});
