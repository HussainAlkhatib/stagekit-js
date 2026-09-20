'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1609",
  name: "Replace \"m\" with \"a\"",
  description: "Replaces every m with a.",
  run: (value) => String(value).split("m").join("a"),
});
