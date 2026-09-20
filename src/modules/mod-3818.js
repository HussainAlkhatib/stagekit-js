'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3818",
  name: "Replace \"W\" with \"n\"",
  description: "Replaces every W with n.",
  run: (value) => String(value).split("W").join("n"),
});
