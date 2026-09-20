'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1017",
  name: "Replace \"e\" with \"a\"",
  description: "Replaces every e with a.",
  run: (value) => String(value).split("e").join("a"),
});
