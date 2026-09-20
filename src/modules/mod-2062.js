'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2062",
  name: "Replace \"t\" with \"B\"",
  description: "Replaces every t with B.",
  run: (value) => String(value).split("t").join("B"),
});
