'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0180",
  name: "Replace \"a\" with \"n\"",
  description: "Replaces every a with n.",
  run: (value) => String(value).split("a").join("n"),
});
