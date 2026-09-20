'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1251",
  name: "Replace \"g\" with \"j\"",
  description: "Replaces every g with j.",
  run: (value) => String(value).split("g").join("j"),
});
