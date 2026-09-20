'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1199",
  name: "Replace \"f\" with \"s\"",
  description: "Replaces every f with s.",
  run: (value) => String(value).split("f").join("s"),
});
