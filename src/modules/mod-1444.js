'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1444",
  name: "Replace \"j\" with \"t\"",
  description: "Replaces every j with t.",
  run: (value) => String(value).split("j").join("t"),
});
