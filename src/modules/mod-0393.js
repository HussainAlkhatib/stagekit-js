'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0393",
  name: "Replace \"a\" with \"W\"",
  description: "Replaces every a with W.",
  run: (value) => String(value).split("a").join("W"),
});
