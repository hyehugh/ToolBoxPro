// Module-level cache: survives component remounts (page navigation within the site)
export const pipelineCache = new Map<string, any>();
