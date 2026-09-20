'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1182",
  name: "Replace \"f\" with \"a\"",
  description: "Replaces every f with a.",
  run: (value) => String(value).split("f").join("a"),
});
