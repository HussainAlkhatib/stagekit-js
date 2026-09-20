'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1304",
  name: "Replace \"h\" with \"a\"",
  description: "Replaces every h with a.",
  run: (value) => String(value).split("h").join("a"),
});
