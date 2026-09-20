'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2674",
  name: "Replace \"D\" with \"C\"",
  description: "Replaces every D with C.",
  run: (value) => String(value).split("D").join("C"),
});
