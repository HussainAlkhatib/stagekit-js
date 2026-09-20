'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2668",
  name: "Replace \"D\" with \"w\"",
  description: "Replaces every D with w.",
  run: (value) => String(value).split("D").join("w"),
});
