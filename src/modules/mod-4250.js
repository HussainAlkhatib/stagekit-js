'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4250",
  name: "Replace \"3\" with \"s\"",
  description: "Replaces every 3 with s.",
  run: (value) => String(value).split("3").join("s"),
});
