'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2744",
  name: "Replace \"E\" with \"M\"",
  description: "Replaces every E with M.",
  run: (value) => String(value).split("E").join("M"),
});
