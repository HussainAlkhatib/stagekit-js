'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1927",
  name: "Replace \"r\" with \"n\"",
  description: "Replaces every r with n.",
  run: (value) => String(value).split("r").join("n"),
});
