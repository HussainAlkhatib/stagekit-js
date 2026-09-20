'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4171",
  name: "Replace \"2\" with \"a\"",
  description: "Replaces every 2 with a.",
  run: (value) => String(value).split("2").join("a"),
});
