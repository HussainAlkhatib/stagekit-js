'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1455",
  name: "Replace \"j\" with \"E\"",
  description: "Replaces every j with E.",
  run: (value) => String(value).split("j").join("E"),
});
