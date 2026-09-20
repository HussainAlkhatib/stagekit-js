'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4537",
  name: "Replace \"8\" with \"a\"",
  description: "Replaces every 8 with a.",
  run: (value) => String(value).split("8").join("a"),
});
