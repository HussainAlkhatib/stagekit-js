'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0409",
  name: "Replace \"a\" with \"0\"",
  description: "Replaces every a with 0.",
  run: (value) => String(value).split("a").join("0"),
});
