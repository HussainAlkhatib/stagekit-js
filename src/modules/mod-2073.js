'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2073",
  name: "Replace \"t\" with \"M\"",
  description: "Replaces every t with M.",
  run: (value) => String(value).split("t").join("M"),
});
