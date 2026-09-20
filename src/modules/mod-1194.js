'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1194",
  name: "Replace \"f\" with \"n\"",
  description: "Replaces every f with n.",
  run: (value) => String(value).split("f").join("n"),
});
