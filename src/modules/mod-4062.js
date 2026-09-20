'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4062",
  name: "Replace \"0\" with \"n\"",
  description: "Replaces every 0 with n.",
  run: (value) => String(value).split("0").join("n"),
});
