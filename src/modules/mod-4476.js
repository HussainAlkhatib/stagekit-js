'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4476",
  name: "Replace \"7\" with \"a\"",
  description: "Replaces every 7 with a.",
  run: (value) => String(value).split("7").join("a"),
});
