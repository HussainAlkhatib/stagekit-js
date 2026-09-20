'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3938",
  name: "Replace \"Y\" with \"l\"",
  description: "Replaces every Y with l.",
  run: (value) => String(value).split("Y").join("l"),
});
