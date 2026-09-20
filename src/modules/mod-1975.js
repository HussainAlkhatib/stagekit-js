'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1975",
  name: "Replace \"s\" with \"a\"",
  description: "Replaces every s with a.",
  run: (value) => String(value).split("s").join("a"),
});
