import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Craft Kits',
          imageUrl: 'https://i.etsystatic.com/25063274/r/il/abf30c/2760977283/il_794xN.2760977283_jzvs.jpg',
          size: 'small',
          id: 1,
          linkUrl: 'craft-kits'
        },
        {
          title: 'Wall Art',
          imageUrl: 'https://i.etsystatic.com/25063274/r/il/3d11fe/2739217958/il_794xN.2739217958_ht69.jpg',
          size: 'small',
          id: 2,
          linkUrl: 'wall-art'
        },
        {
          title: 'Sheets',
          imageUrl: 'https://i.etsystatic.com/25063274/r/il/fa4ef3/2739267804/il_794xN.2739267804_g39h.jpg',
          size: 'small',
          id: 3,
          linkUrl: 'sheets'
        },
        {
          title: 'Educational Prints',
          imageUrl: 'https://i.etsystatic.com/25063274/r/il/e931d4/2710956098/il_794xN.2710956098_lvyb.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'prints'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;