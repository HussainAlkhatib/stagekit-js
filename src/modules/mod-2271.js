'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2271",
  name: "Replace \"w\" with \"1\"",
  description: "Replaces every w with 1.",
  run: (value) => String(value).split("w").join("1"),
});
