'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0306",
  name: "Replace \"a\" with \"E\"",
  description: "Replaces every a with E.",
  run: (value) => String(value).split("a").join("E"),
});
