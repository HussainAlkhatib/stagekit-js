'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2352",
  name: "Replace \"y\" with \"l\"",
  description: "Replaces every y with l.",
  run: (value) => String(value).split("y").join("l"),
});
