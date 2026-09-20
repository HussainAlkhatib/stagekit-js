'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2646",
  name: "Replace \"D\" with \"a\"",
  description: "Replaces every D with a.",
  run: (value) => String(value).split("D").join("a"),
});
