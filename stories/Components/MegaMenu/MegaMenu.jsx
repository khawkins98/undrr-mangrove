import { useState } from "react";
import "./megamenu.scss"

export function MegaMenu() {
  const sections = [
    {
      title: 'Section 1',
      bannerHeading: 'Analytics by country',
      bannerDescription: 'Gaze upon statistics in wonder...',
      items: [
        {
          title: 'Item 1',
          subItems: Array(30).fill({ title: 'Sub-item 1', url: '#'})
        },
        {
          title: 'Item 2',
          subItems: Array(20).fill({ title: 'Sub-item 2', url: '#'})
        }
      ]
    },
  ]

  const [section, setSection] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div 
      className="mg-mega-wrapper"
      // onMouseLeave={() => setsection(null)}
    >
      {/* Topbar */}
      <div className="mg-mega-topbar">
        {
          sections.map((item, index) => (
            <div 
              key={index}
              className="mg-mega-topbar__item"
              onMouseEnter={() => setSection(item)}
            > 
              { item.title }
            </div>
          ))
        }
      </div>
      {/* Content */}
      {
        section !== null && (
          <div className="mg-mega-content">
            <div className="mg-mega-content__left">
              <div className="mg-mega-content__banner">
                <h1>{section.bannerHeading}</h1>
                <p>{section.bannerDescription}</p>
              </div>
              <ul className="mg-mega-content__section-list">
                {
                  section.items.map((item, index) => (
                    <li 
                      key={index}
                      className="mg-mega-content__section-list-item"
                      onMouseEnter={() => setItemIndex(index)}
                    >
                      <a 
                        className={`mg-mega-content__section-list-link ${itemIndex === index ? 'mg-mega-content__section-list-link--active' : ''}`} 
                        href={item.url}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="mg-mega-content__right">
              <ul>
                {
                  section.items[itemIndex].subItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}