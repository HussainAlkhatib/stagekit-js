'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3762",
  name: "Replace \"V\" with \"s\"",
  description: "Replaces every V with s.",
  run: (value) => String(value).split("V").join("s"),
});
