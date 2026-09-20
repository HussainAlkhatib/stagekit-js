'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1256",
  name: "Replace \"g\" with \"o\"",
  description: "Replaces every g with o.",
  run: (value) => String(value).split("g").join("o"),
});
