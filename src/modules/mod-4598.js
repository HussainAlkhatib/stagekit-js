'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4598",
  name: "Replace \"9\" with \"a\"",
  description: "Replaces every 9 with a.",
  run: (value) => String(value).split("9").join("a"),
});
