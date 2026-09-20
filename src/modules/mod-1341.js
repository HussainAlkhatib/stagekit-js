'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1341",
  name: "Replace \"h\" with \"M\"",
  description: "Replaces every h with M.",
  run: (value) => String(value).split("h").join("M"),
});
