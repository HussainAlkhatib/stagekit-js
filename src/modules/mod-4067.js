'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4067",
  name: "Replace \"0\" with \"s\"",
  description: "Replaces every 0 with s.",
  run: (value) => String(value).split("0").join("s"),
});
