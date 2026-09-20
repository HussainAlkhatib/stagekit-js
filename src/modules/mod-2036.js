'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2036",
  name: "Replace \"t\" with \"a\"",
  description: "Replaces every t with a.",
  run: (value) => String(value).split("t").join("a"),
});
