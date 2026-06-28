# ShieldScan Architecture

This foundation separates the browser client and API server into independent applications.

## Client

The client owns presentation, routing, API calls, reusable UI components, layouts, hooks, context, utilities, assets, and global styles.

## Server

The server owns API routes, controllers, services, middleware, configuration, database integration points, models, utilities, and future analyzers.

## Future Detection Flow

Detection logic should be added behind server-side analyzer services. The frontend should call API endpoints and avoid embedding security heuristics directly in browser code.
