'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1548",
  name: "Replace \"l\" with \"a\"",
  description: "Replaces every l with a.",
  run: (value) => String(value).split("l").join("a"),
});
