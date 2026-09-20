'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1792",
  name: "Replace \"p\" with \"a\"",
  description: "Replaces every p with a.",
  run: (value) => String(value).split("p").join("a"),
});
