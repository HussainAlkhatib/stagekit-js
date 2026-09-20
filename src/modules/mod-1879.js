'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1879",
  name: "Replace \"q\" with \"B\"",
  description: "Replaces every q with B.",
  run: (value) => String(value).split("q").join("B"),
});
