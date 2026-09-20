'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1809",
  name: "Replace \"p\" with \"s\"",
  description: "Replaces every p with s.",
  run: (value) => String(value).split("p").join("s"),
});
