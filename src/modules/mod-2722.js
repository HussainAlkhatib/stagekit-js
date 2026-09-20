'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2722",
  name: "Replace \"E\" with \"p\"",
  description: "Replaces every E with p.",
  run: (value) => String(value).split("E").join("p"),
});
