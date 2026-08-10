# Layout & Spacing Fix

- Sidebar width is isolated from the main content area.
- Main workspace has `min-width: 0` and horizontal overflow protection.
- Dashboard metric cards use equal flexible columns.
- Dashboard panels use `minmax(0, 1fr)` so long content cannot force overlap.
- Desktop uses a two-column dashboard grid; below 1100px it becomes one column.
- Mobile collapses metrics and action lists cleanly.
- Images and controls are constrained to their parent width.

This pass is intended to prevent clipping, overlap, and horizontal overflow across the dashboard and workspace pages.
