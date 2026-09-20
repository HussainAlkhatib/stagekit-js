'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1897",
  name: "Replace \"q\" with \"T\"",
  description: "Replaces every q with T.",
  run: (value) => String(value).split("q").join("T"),
});
