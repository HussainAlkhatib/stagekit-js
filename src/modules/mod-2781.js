'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2781",
  name: "Replace \"F\" with \"n\"",
  description: "Replaces every F with n.",
  run: (value) => String(value).split("F").join("n"),
});
