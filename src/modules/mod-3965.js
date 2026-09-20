'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3965",
  name: "Replace \"Y\" with \"M\"",
  description: "Replaces every Y with M.",
  run: (value) => String(value).split("Y").join("M"),
});
