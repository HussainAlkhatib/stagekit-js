'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0331",
  name: "Replace \"a\" with \"J\"",
  description: "Replaces every a with J.",
  run: (value) => String(value).split("a").join("J"),
});
