'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3195",
  name: "Replace \"M\" with \"a\"",
  description: "Replaces every M with a.",
  run: (value) => String(value).split("M").join("a"),
});
