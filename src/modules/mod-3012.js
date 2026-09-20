'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3012",
  name: "Replace \"J\" with \"a\"",
  description: "Replaces every J with a.",
  run: (value) => String(value).split("J").join("a"),
});
