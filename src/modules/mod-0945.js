'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0945",
  name: "Replace \"d\" with \"M\"",
  description: "Replaces every d with M.",
  run: (value) => String(value).split("d").join("M"),
});
