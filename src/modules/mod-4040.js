'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4040",
  name: "Replace \"Z\" with \"1\"",
  description: "Replaces every Z with 1.",
  run: (value) => String(value).split("Z").join("1"),
});
