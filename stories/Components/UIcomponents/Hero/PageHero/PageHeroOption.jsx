import React from 'react';
import './page-hero.scss';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';

export function PageHeroOption({
  data, title, content, active, variant, imgsrc, imgsrc2, imgalt, videosrc,
}) {
  return (
    <div className="pagehero-tall">
      <div className="grid-x">
        <div className="cell medium-4 medium-offset-1">
          <div className="pagehero-content">
            <Breadcrumbcomponent data={data} />
            {content && <Heading type="4" label={content} dataViewport="true" />}
            <Heading type="2" label={title} dataViewport="true" />
          </div>
        </div>
        <div className="cell medium-7">
          <div className="homepage-hero-image">
            {variant === 'video' ? (
              <Video src={videosrc} width="100%" height="100%" />
            ) : (
              <picture>
                <source media="(min-width: 767px)" srcSet={imgsrc} />
                <img src={imgsrc2} alt={imgalt} />
              </picture>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

PageHeroOption.defaultProps = {
  variant: 'image',
};
