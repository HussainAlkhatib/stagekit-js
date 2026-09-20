'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3561",
  name: "Replace \"S\" with \"a\"",
  description: "Replaces every S with a.",
  run: (value) => String(value).split("S").join("a"),
});
