'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3171",
  name: "Replace \"L\" with \"M\"",
  description: "Replaces every L with M.",
  run: (value) => String(value).split("L").join("M"),
});
