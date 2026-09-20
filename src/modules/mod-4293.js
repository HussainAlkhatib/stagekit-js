'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4293",
  name: "Replace \"4\" with \"a\"",
  description: "Replaces every 4 with a.",
  run: (value) => String(value).split("4").join("a"),
});
