'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3405",
  name: "Replace \"P\" with \"B\"",
  description: "Replaces every P with B.",
  run: (value) => String(value).split("P").join("B"),
});
