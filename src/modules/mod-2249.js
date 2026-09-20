'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2249",
  name: "Replace \"w\" with \"F\"",
  description: "Replaces every w with F.",
  run: (value) => String(value).split("w").join("F"),
});
