import React, { Fragment } from 'react';
import './card.scss';
import '../../../../assets/scss/_grid.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolors_options = {
  yellow: '',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export function VerticalCard({
  data, Hovercolors,
}) {
  let hovercolors_variant = hovercolors_options[`${Hovercolors}`];
  return (
    <>
      <h5>VERTICAL CARD</h5>
      <article className="mg-card">

        {data.map((item, index) => (
          <div key={index} className="mg-card__vc">
            <div className="mg-card__visual">
              <img src={item.imgback} alt={item.imgback} className="mg-card__image" />
              <a href={item.link} className="mg-card__share">{item.share}</a>
            </div>

            <div className={cls('mg-card__content', `${hovercolors_variant}`)}>

              <div className="mg-card__meta">
                <a href={item.link} className="mg-card__label mg-card__label--active">{item.label1}</a>
                <a href={item.link} className="mg-card__label mg-card__label--active">{item.label2}</a>
              </div>

              <header className="mg-card__title">
                <a href={item.link}>{item.contentname}</a>
              </header>

              <p className="mg-card__text">{item.text}</p>

              <a href={item.link} className="mg-card__button">{item.button}</a>

            </div>

          </div>
        ))}
      </article>
    </>
  );
}

VerticalCard.defaultProps = {
  Hovercolors: 'yellow',
};