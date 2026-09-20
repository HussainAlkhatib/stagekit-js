'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4616",
  name: "Replace \"9\" with \"s\"",
  description: "Replaces every 9 with s.",
  run: (value) => String(value).split("9").join("s"),
});
