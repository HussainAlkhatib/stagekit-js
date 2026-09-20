'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0389",
  name: "Replace \"a\" with \"V\"",
  description: "Replaces every a with V.",
  run: (value) => String(value).split("a").join("V"),
});
