'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4306",
  name: "Replace \"4\" with \"n\"",
  description: "Replaces every 4 with n.",
  run: (value) => String(value).split("4").join("n"),
});
