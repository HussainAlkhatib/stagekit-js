'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3100",
  name: "Replace \"K\" with \"B\"",
  description: "Replaces every K with B.",
  run: (value) => String(value).split("K").join("B"),
});
