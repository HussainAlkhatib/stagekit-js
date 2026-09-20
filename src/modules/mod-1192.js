'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1192",
  name: "Replace \"f\" with \"l\"",
  description: "Replaces every f with l.",
  run: (value) => String(value).split("f").join("l"),
});
