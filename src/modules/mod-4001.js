'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4001",
  name: "Replace \"Z\" with \"n\"",
  description: "Replaces every Z with n.",
  run: (value) => String(value).split("Z").join("n"),
});
