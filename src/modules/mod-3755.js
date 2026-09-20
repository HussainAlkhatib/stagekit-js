'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3755",
  name: "Replace \"V\" with \"l\"",
  description: "Replaces every V with l.",
  run: (value) => String(value).split("V").join("l"),
});
