'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2673",
  name: "Replace \"D\" with \"B\"",
  description: "Replaces every D with B.",
  run: (value) => String(value).split("D").join("B"),
});
