'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3757",
  name: "Replace \"V\" with \"n\"",
  description: "Replaces every V with n.",
  run: (value) => String(value).split("V").join("n"),
});
