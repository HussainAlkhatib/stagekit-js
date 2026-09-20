'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1882",
  name: "Replace \"q\" with \"E\"",
  description: "Replaces every q with E.",
  run: (value) => String(value).split("q").join("E"),
});
