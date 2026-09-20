'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0651",
  name: "Replace \"c\" with \"a\"",
  description: "Replaces every c with a.",
  run: (value) => String(value).split("c").join("a"),
});
