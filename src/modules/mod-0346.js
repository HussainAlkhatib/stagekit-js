'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0346",
  name: "Replace \"a\" with \"M\"",
  description: "Replaces every a with M.",
  run: (value) => String(value).split("a").join("M"),
});
