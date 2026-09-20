'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2463",
  name: "Replace \"A\" with \"a\"",
  description: "Replaces every A with a.",
  run: (value) => String(value).split("A").join("a"),
});
