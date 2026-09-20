'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2917",
  name: "Replace \"H\" with \"B\"",
  description: "Replaces every H with B.",
  run: (value) => String(value).split("H").join("B"),
});
