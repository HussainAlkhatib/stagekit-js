'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2115",
  name: "Replace \"u\" with \"s\"",
  description: "Replaces every u with s.",
  run: (value) => String(value).split("u").join("s"),
});
