'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4555",
  name: "Replace \"8\" with \"s\"",
  description: "Replaces every 8 with s.",
  run: (value) => String(value).split("8").join("s"),
});
