'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1626",
  name: "Replace \"m\" with \"s\"",
  description: "Replaces every m with s.",
  run: (value) => String(value).split("m").join("s"),
});
