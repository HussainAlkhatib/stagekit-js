'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4101",
  name: "Replace \"0\" with \"1\"",
  description: "Replaces every 0 with 1.",
  run: (value) => String(value).split("0").join("1"),
});
