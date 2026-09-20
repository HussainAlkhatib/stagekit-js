'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2687",
  name: "Replace \"D\" with \"Q\"",
  description: "Replaces every D with Q.",
  run: (value) => String(value).split("D").join("Q"),
});
