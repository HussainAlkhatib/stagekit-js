'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0437",
  name: "Replace \"a\" with \"7\"",
  description: "Replaces every a with 7.",
  run: (value) => String(value).split("a").join("7"),
});
