'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0401",
  name: "Replace \"a\" with \"Y\"",
  description: "Replaces every a with Y.",
  run: (value) => String(value).split("a").join("Y"),
});
