'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2964",
  name: "Replace \"I\" with \"n\"",
  description: "Replaces every I with n.",
  run: (value) => String(value).split("I").join("n"),
});
