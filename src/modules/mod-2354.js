'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2354",
  name: "Replace \"y\" with \"n\"",
  description: "Replaces every y with n.",
  run: (value) => String(value).split("y").join("n"),
});
