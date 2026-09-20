'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3466",
  name: "Replace \"Q\" with \"B\"",
  description: "Replaces every Q with B.",
  run: (value) => String(value).split("Q").join("B"),
});
