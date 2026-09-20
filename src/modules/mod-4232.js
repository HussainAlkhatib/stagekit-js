'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4232",
  name: "Replace \"3\" with \"a\"",
  description: "Replaces every 3 with a.",
  run: (value) => String(value).split("3").join("a"),
});
