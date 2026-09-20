'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3945",
  name: "Replace \"Y\" with \"s\"",
  description: "Replaces every Y with s.",
  run: (value) => String(value).split("Y").join("s"),
});
