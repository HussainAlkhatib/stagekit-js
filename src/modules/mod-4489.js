'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4489",
  name: "Replace \"7\" with \"n\"",
  description: "Replaces every 7 with n.",
  run: (value) => String(value).split("7").join("n"),
});
