'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2367",
  name: "Replace \"y\" with \"B\"",
  description: "Replaces every y with B.",
  run: (value) => String(value).split("y").join("B"),
});
