import { COLORS } from "@heydovetail/ui-components";
import illustrationBarChart from "@heydovetail/website/components/illustrations/bar-chart.svg";
import illustrationBoard from "@heydovetail/website/components/illustrations/board.svg";
import illustrationEditor from "@heydovetail/website/components/illustrations/editor.svg";
import illustrationFiles from "@heydovetail/website/components/illustrations/files.svg";
import illustrationSearch from "@heydovetail/website/components/illustrations/search.svg";
import { Center } from "@heydovetail/website/components/layout/Center";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    const title = "Features";
    const description =
      "Powerful features designed to help you organize, analyze, and share qualitative user research and insights.";

    return (
      <PageLayout>
        <Helmet>
          <title>{title} – Dovetail</title>
          <meta property="og:title" content={`${title} – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer>
          <Hero subtitle={description} title={title} />
          <FeatureHero
            image={illustrationEditor}
            imagePosition="right"
            location={locations.featuresHighlights()}
            linkText="Learn more"
            text="Identify patterns across qualitative data with our rich text editor. Select text and quickly highlight sentences with tags."
            title="Highlights"
          />
          <FeatureHero
            image={illustrationSearch}
            imagePosition="left"
            location={locations.featuresSearch()}
            linkText="Learn more"
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results and find what you’re looking for."
            title="Full-text search"
          />
          <FeatureHero
            image={illustrationFiles}
            imagePosition="right"
            location={locations.featuresFiles()}
            linkText="Learn more"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Images and files"
          />
          <FeatureHero
            image={illustrationBoard}
            imagePosition="left"
            location={locations.featuresProjects()}
            linkText="Learn more"
            text="Organize your user research data with an intuitive drag and drop board, integrations, charts, insights, and more."
            title="Projects"
          />
          <FeatureHero
            image={illustrationBarChart}
            imagePosition="right"
            location={locations.featuresCharts()}
            linkText="Learn more"
            text="Visualize tag usage in a quick snapshot or identify trends over time with our beautiful, colorful bar and line charts."
            title="Charts"
          />
        </LightContainer>
        <LightContainer backgroundColor={COLORS.p04}>
          <Center>
            <h2>All features</h2>
          </Center>
          <Features
            features={[
              { title: "Bar chart", text: "Understand your research projects at a glance" },
              { title: "Boards", text: "View notes, tags, and insights on a drag & drop board" },
              { title: "Encrypted data", text: "Your data is encrypted in our database and backups" },
              { title: "Export", text: "Export notes & insights as PDFs and tags as a spreadsheet" },
              { title: "Files", text: "Store and organize documents, audio, and video files" },
              { title: "Full-text search", text: "Search within notes, tags, insights, and highlights" },
              { title: "GDPR-ready", text: "Dovetail is GDPR-ready with a DPA available on request" },
              { title: "Google log in", text: "Log in or sign up with your existing Google account" },
              { title: "Highlights", text: "Turn sentences into structured, tagged data" },
              { title: "Images", text: "Add images to research notes, tags, and insights" },
              { title: "Import", text: "Create notes, tags, and insights via a spreadsheet" },
              { title: "Insights", text: "Summarize and share research insights during analysis" },
              { title: "Knowledge base", text: "Detailed help documentation with walkthroughs" },
              { title: "Mobile", text: "Browse notes, tags, and insights on your phone or tablet" },
              { title: "Notes", text: "Take notes in our easy-to-use rich text editor" },
              { title: "Premium support", text: "Quick responses to questions and issues via email" },
              { title: "Projects", text: "Organize data into projects and create unique tag sets" },
              { title: "Real time collaboration", text: "Collaborate on notes with others in real time" },
              { title: "Quick edit", text: "Edit notes, tags, and insights without leaving your context" },
              { title: "Sentiment analysis", text: "Automatically analyze the sentiment of text" },
              { title: "Slack community", text: "Chat with our team and other researchers on Slack" },
              { title: "Teams", text: "Collaborate with people across your organization" },
              { title: "Unlimited users", text: "Invite as many users as you like for no extra cost" },
              { title: "Zapier", text: "Import data from thousands of apps like Trello and Wufoo" }
            ]}
          />
        </LightContainer>
        <LightContainer>
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </PageLayout>
    );
  }
}
