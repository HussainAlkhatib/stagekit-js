'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0280",
  name: "Replace \"a\" with \"z\"",
  description: "Replaces every a with z.",
  run: (value) => String(value).split("a").join("z"),
});
