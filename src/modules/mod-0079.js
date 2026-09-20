'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0079",
  name: "Mask all but last 5",
  description: "Masks all but the last 5 characters.",
  run: (value) => { const s = String(value); const keep = 5; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
