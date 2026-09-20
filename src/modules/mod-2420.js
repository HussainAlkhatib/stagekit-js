'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2420",
  name: "Replace \"z\" with \"s\"",
  description: "Replaces every z with s.",
  run: (value) => String(value).split("z").join("s"),
});
