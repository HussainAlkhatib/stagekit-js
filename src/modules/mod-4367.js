'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4367",
  name: "Replace \"5\" with \"n\"",
  description: "Replaces every 5 with n.",
  run: (value) => String(value).split("5").join("n"),
});
