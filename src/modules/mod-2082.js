'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2082",
  name: "Replace \"t\" with \"V\"",
  description: "Replaces every t with V.",
  run: (value) => String(value).split("t").join("V"),
});
