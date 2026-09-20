'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0864",
  name: "Replace \"d\" with \"l\"",
  description: "Replaces every d with l.",
  run: (value) => String(value).split("d").join("l"),
});
