'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4372",
  name: "Replace \"5\" with \"s\"",
  description: "Replaces every 5 with s.",
  run: (value) => String(value).split("5").join("s"),
});
