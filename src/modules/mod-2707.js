'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2707",
  name: "Replace \"E\" with \"a\"",
  description: "Replaces every E with a.",
  run: (value) => String(value).split("E").join("a"),
});
