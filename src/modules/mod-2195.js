'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2195",
  name: "Replace \"v\" with \"M\"",
  description: "Replaces every v with M.",
  run: (value) => String(value).split("v").join("M"),
});
