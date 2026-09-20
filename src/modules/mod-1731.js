'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1731",
  name: "Replace \"o\" with \"a\"",
  description: "Replaces every o with a.",
  run: (value) => String(value).split("o").join("a"),
});
