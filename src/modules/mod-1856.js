'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1856",
  name: "Replace \"q\" with \"d\"",
  description: "Replaces every q with d.",
  run: (value) => String(value).split("q").join("d"),
});
