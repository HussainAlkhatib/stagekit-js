'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2596",
  name: "Replace \"C\" with \"l\"",
  description: "Replaces every C with l.",
  run: (value) => String(value).split("C").join("l"),
});
