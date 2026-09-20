'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4110",
  name: "Replace \"1\" with \"a\"",
  description: "Replaces every 1 with a.",
  run: (value) => String(value).split("1").join("a"),
});
