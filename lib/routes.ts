export const routes = ['/', '/services', '/process', '/capabilities', '/contact'] as const
export type Route = (typeof routes)[number]
