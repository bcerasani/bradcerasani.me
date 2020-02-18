import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import Player from '@vimeo/player';

import { Figure, Caption, FluidWrapper } from './styles';

function addCuePoints(player, annotations) {
  annotations.forEach(({ time, annotation }) => {
    player
      .addCuePoint(time, { annotation })
      .catch((error) => console.error(error));
  });
}

export const Video = ({ vimeoId, caption, size, children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [captionText, setCaption] = useState(caption);
  const targetElementId = `js-${vimeoId}`;

  useEffect(() => {
    const embedOptions = {
      byline: 0,
      color: '85a19f',
      id: vimeoId,
      portrait: 0,
      title: 0,
    };

    const player = new Player(targetElementId, embedOptions);

    // Set up video annotations
    if (children) {
      const annotations = children
        .filter(({ props }) => props.mdxType === 'AN')
        .map(({ props }) => {
          const annotation = {
            time: props.time,
            annotation: ReactDOMServer.renderToString(props.children),
          };

          return annotation;
        });

      console.table(annotations);
      addCuePoints(player, annotations);
    }

    // Set up event listeners
    player.on('loaded', () => setLoaded(true));
    player.on('cuepoint', (event) => setCaption(event.data.annotation));

    return () => {
      player.destroy();
    };
  }, [children, targetElementId, vimeoId]);

  return (
    <Figure size={size}>
      <FluidWrapper isLoaded={isLoaded}>
        <div id={targetElementId} />
      </FluidWrapper>

      <Caption dangerouslySetInnerHTML={{ __html: captionText }} />
    </Figure>
  );
};
