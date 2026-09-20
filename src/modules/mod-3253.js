'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3253",
  name: "Replace \"M\" with \"7\"",
  description: "Replaces every M with 7.",
  run: (value) => String(value).split("M").join("7"),
});
