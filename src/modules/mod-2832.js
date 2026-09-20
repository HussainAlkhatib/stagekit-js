'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2832",
  name: "Replace \"G\" with \"d\"",
  description: "Replaces every G with d.",
  run: (value) => String(value).split("G").join("d"),
});
