'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3933",
  name: "Replace \"Y\" with \"g\"",
  description: "Replaces every Y with g.",
  run: (value) => String(value).split("Y").join("g"),
});
