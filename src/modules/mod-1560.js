'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1560",
  name: "Replace \"l\" with \"n\"",
  description: "Replaces every l with n.",
  run: (value) => String(value).split("l").join("n"),
});
