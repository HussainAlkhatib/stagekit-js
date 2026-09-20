'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2585",
  name: "Replace \"C\" with \"a\"",
  description: "Replaces every C with a.",
  run: (value) => String(value).split("C").join("a"),
});
