'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3283",
  name: "Replace \"N\" with \"B\"",
  description: "Replaces every N with B.",
  run: (value) => String(value).split("N").join("B"),
});
