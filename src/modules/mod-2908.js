'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2908",
  name: "Replace \"H\" with \"s\"",
  description: "Replaces every H with s.",
  run: (value) => String(value).split("H").join("s"),
});
