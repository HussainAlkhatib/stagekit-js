'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0225",
  name: "Replace \"a\" with \"s\"",
  description: "Replaces every a with s.",
  run: (value) => String(value).split("a").join("s"),
});
