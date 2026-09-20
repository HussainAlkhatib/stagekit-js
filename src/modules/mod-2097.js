'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2097",
  name: "Replace \"u\" with \"a\"",
  description: "Replaces every u with a.",
  run: (value) => String(value).split("u").join("a"),
});
