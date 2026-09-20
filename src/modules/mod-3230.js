'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3230",
  name: "Replace \"M\" with \"J\"",
  description: "Replaces every M with J.",
  run: (value) => String(value).split("M").join("J"),
});
