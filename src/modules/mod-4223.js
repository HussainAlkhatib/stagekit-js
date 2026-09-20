'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4223",
  name: "Replace \"2\" with \"0\"",
  description: "Replaces every 2 with 0.",
  run: (value) => String(value).split("2").join("0"),
});
