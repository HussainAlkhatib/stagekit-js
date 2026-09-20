'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2043",
  name: "Replace \"t\" with \"h\"",
  description: "Replaces every t with h.",
  run: (value) => String(value).split("t").join("h"),
});
