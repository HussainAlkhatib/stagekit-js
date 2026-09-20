'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4189",
  name: "Replace \"2\" with \"s\"",
  description: "Replaces every 2 with s.",
  run: (value) => String(value).split("2").join("s"),
});
