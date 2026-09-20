'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1670",
  name: "Replace \"n\" with \"a\"",
  description: "Replaces every n with a.",
  run: (value) => String(value).split("n").join("a"),
});
