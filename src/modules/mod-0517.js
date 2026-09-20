'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0517",
  name: "Replace \"b\" with \"s\"",
  description: "Replaces every b with s.",
  run: (value) => String(value).split("b").join("s"),
});
