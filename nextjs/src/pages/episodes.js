import client from "utils/client";
import groq from "groq";
import { EpisodePage } from "modules/episodes";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";

export default function Episodes(props) {
  const content = Object.values(props);
  return (
    <InteriorLayout>
      <EpisodePage episodes={content} />
    </InteriorLayout>
  )
}

const query = groq`*[_type == "episode"] | order(episodeNumber desc) {
  _id,
  title,
  episodeNumber,
  slug,
  publishedAt,
  briefDescription,
  audioPath
}[0...8]`;

Episodes.getInitialProps = async function (context) {
  return await client.fetch(query);
}
