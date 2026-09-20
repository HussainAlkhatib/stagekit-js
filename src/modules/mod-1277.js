'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1277",
  name: "Replace \"g\" with \"J\"",
  description: "Replaces every g with J.",
  run: (value) => String(value).split("g").join("J"),
});
