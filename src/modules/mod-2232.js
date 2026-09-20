'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2232",
  name: "Replace \"w\" with \"n\"",
  description: "Replaces every w with n.",
  run: (value) => String(value).split("w").join("n"),
});
