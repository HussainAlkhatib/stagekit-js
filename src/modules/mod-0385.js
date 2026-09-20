'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0385",
  name: "Replace \"a\" with \"U\"",
  description: "Replaces every a with U.",
  run: (value) => String(value).split("a").join("U"),
});
