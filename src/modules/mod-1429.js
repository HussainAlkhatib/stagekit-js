'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1429",
  name: "Replace \"j\" with \"d\"",
  description: "Replaces every j with d.",
  run: (value) => String(value).split("j").join("d"),
});
