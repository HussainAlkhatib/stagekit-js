'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1565",
  name: "Replace \"l\" with \"s\"",
  description: "Replaces every l with s.",
  run: (value) => String(value).split("l").join("s"),
});
