'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3879",
  name: "Replace \"X\" with \"n\"",
  description: "Replaces every X with n.",
  run: (value) => String(value).split("X").join("n"),
});
