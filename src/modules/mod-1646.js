'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1646",
  name: "Replace \"m\" with \"M\"",
  description: "Replaces every m with M.",
  run: (value) => String(value).split("m").join("M"),
});
