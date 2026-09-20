'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3086",
  name: "Replace \"K\" with \"n\"",
  description: "Replaces every K with n.",
  run: (value) => String(value).split("K").join("n"),
});
