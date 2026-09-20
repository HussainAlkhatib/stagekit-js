'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3588",
  name: "Replace \"S\" with \"B\"",
  description: "Replaces every S with B.",
  run: (value) => String(value).split("S").join("B"),
});
