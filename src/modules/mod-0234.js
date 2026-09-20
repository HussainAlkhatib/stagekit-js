'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0234",
  name: "Replace \"a\" with \"t\"",
  description: "Replaces every a with t.",
  run: (value) => String(value).split("a").join("t"),
});
