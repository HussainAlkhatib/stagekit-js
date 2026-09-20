'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2359",
  name: "Replace \"y\" with \"s\"",
  description: "Replaces every y with s.",
  run: (value) => String(value).split("y").join("s"),
});
