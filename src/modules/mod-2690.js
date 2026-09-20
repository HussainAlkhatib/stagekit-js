'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2690",
  name: "Replace \"D\" with \"T\"",
  description: "Replaces every D with T.",
  run: (value) => String(value).split("D").join("T"),
});
