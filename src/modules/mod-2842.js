'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2842",
  name: "Replace \"G\" with \"n\"",
  description: "Replaces every G with n.",
  run: (value) => String(value).split("G").join("n"),
});
