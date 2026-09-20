'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2103",
  name: "Replace \"u\" with \"g\"",
  description: "Replaces every u with g.",
  run: (value) => String(value).split("u").join("g"),
});
