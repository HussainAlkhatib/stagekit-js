'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1871",
  name: "Replace \"q\" with \"t\"",
  description: "Replaces every q with t.",
  run: (value) => String(value).split("q").join("t"),
});
