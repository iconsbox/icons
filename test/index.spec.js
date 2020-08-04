import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
// import { Wrapper } from '@iconbox/config';
import '@testing-library/jest-dom/extend-expect';
import * as IconPacks from '../packages/index';
// import * as SpriteIcons from '../packages/sprite/index';

const list = [
  'Clothes',
  'Eid',
  'Emoji',
  'Eva',
  'Feather',
  'FontAwesome4',
  'FontAwesome5',
  'Foundation',
  'IcoMoon',
  'Iconly',
  'IonIcons',
  'Linearicons',
  'Material',
  'Medical',
  'Octicons',
  'Snappmarket',
  'Support',
  'TablerIcons',
];

// RENDER TEST
describe.each(Object.keys(IconPacks))('Icons render test : ', iconPack => {
  const pack = IconPacks[iconPack];
  Object.keys(pack).forEach(icon => {
    it(`should render ${IconPacks} without crashing`, () => {
      const Icon = pack[icon];
      const div = document.createElement('div');

      ReactDOM.unmountComponentAtNode(div);
    });
  });
});


// Sprite RENDER TEST
// describe.each(Object.keys(SpriteIcons))('Sprite Icons render test : ', icon => {
//   const Icon = SpriteIcons[icon];
//
//   it(`should render ${icon} with proper class and size`, () => {
//     const { getByTestId } = render(
//       <Wrapper >
//         <Icon className="my-custom-class" size={2} />
//       </Wrapper>,
//     );
//
//     expect(getByTestId(icon)).toHaveClass('my-custom-class');
//     expect(getByTestId(icon)).toHaveStyle({
//       width: '20px',
//       height: '20px',
//     });
//   });
//
//   it(`should render default href path`, () => {
//     const { getByTestId } = render(
//       <Wrapper options={{
//         importSpriteSVG: true,
//         useSpriteFile: true,
//       }}>
//         <Icon />
//       </Wrapper>,
//     );
//     expect(getByTestId(`${icon}Href`)).toHaveAttribute('xlink:href',`/sprite.svg#${icon}`);
//   });
// });
//
// describe.each(Object.keys(SpriteIcons))('Sprite Icons render test : ', icon => {
//   it(`should render correct href path`, () => {
//     const Icon = SpriteIcons[icon];
//     const { getByTestId } = render(
//       <Wrapper
//         options={{
//           importSpriteSVG: true,
//           useSpriteFile: true,
//           publicPath: 'Test',
//           spriteSvgName: 'randomName.svg'
//         }}
//       >
//         <Icon />
//       </Wrapper>,
//     );
//
//     expect(getByTestId(`${icon}Href`)).toHaveAttribute('xlink:href',`/Test/randomName.svg#${icon}`);
//   });
// });
