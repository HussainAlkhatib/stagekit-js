'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2408",
  name: "Replace \"z\" with \"g\"",
  description: "Replaces every z with g.",
  run: (value) => String(value).split("z").join("g"),
});
