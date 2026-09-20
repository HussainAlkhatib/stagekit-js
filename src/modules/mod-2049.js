'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2049",
  name: "Replace \"t\" with \"n\"",
  description: "Replaces every t with n.",
  run: (value) => String(value).split("t").join("n"),
});
