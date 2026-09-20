'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3518",
  name: "Replace \"R\" with \"s\"",
  description: "Replaces every R with s.",
  run: (value) => String(value).split("R").join("s"),
});
