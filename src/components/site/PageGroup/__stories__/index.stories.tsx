import * as React from "react";
import { storiesOf } from "src/util/stories";
import { PageGroup } from "../";

storiesOf("Site/PageGroup", module).add("default", () => (
  <PageGroup
    pages={[
      {
        title: "Create projects and notes",
        path: "/help/create"
      },
      {
        title: "Create annotations, tags, and insights",
        path: "/help/create-more"
      },
      {
        title: "Organize your content",
        path: "/help/organize"
      },
      {
        title: "Bulk edit annotations and merge tags",
        path: "/help/bulk-edit"
      }
    ]}
    title="Get started"
  />
));
