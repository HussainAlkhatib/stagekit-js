'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1053",
  name: "Replace \"e\" with \"n\"",
  description: "Replaces every e with n.",
  run: (value) => String(value).split("e").join("n"),
});
