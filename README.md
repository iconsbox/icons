<a href="https://iconbox.space" target="_blank">
    <p align="center">
        <img src="https://cdn.dribbble.com/users/636156/screenshots/1899530/jumping_squares.gif" width="220" alt="BoxBouncing" />
    </p>
  <h1 align="center" style="color:#ff0000; font-size:12px;">🧙 IconBox</h1>
</a>

<p align="center" style="font-size: 24px; font-weight: 900">
    A world of famous icon packs with easy to use interface
    <br/>
</p>

## How to use iconbox?

Icons are available in `svg` format, `react` components and a special way of `sprite` file, which allows you to sprite svg icons
in a pack. e.g. if you are using `webpack` you could use [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)


## React svg components
Choose your icon from our [webapp](https://iconbox.space) then import it where ever you want: 
```js
import { MoodSadIcon } from '@iconbox/tabler';

const Component = () => {
  return <MoodSadIcon />;
}
```

If you want to improve bundle size and jusgt complie used svg files:
```js
[
  'transform-imports',
  {
    '@iconbox\/?(((\\w*)?\/?)*)': {
      'transform': isClient ? '@iconbox/${1}/esm/${member}' : '@iconbox/${1}/${member}',
    },
  }
]
```
the `isClient` could decide between SSR and CSR and load svg files `cjs` version in server.


## Sprite svg components
Choose your icon from our [webapp](https://iconbox.space) then import it where ever you want: 
```js
import { MoodSadIcon } from '@iconbox/tabler/sprite';

const Component = () => {
  return <MoodSadIcon />;
}
```

If you want to improve bundle size and jusgt complie used svg files:
```js
[
  'transform-imports',
  {
    '@iconbox\/?(((\\w*)?\/?)*)\/sprite': {
      'transform': isClient ? '@iconbox/${1}/esm/${member}/sprite' : '@iconbox/${1}/${member}/sprite',
    },
  }
]
```
the `isClient` could decide between SSR and CSR and load svg files `cjs` version in server.

## which file should I use?
You can use whatever version you want, we provide various versions of icons for every pack. But we advice reading this article about **FontIcons** vs **Svg Icons** compare by [CssTricks](https://css-tricks.com/icon-fonts-vs-svg/) first.

## license 
This repo is just a wrapper to exist icon packs, so please respect every icon pack license you use.

- **Clothes**: free icon pack from [flat icons](https://www.flaticon.com/)
- **Eid**: free icon pack from [flat icons](https://www.flaticon.com/)
- **Emoji**: free icon pack from [flat icons](https://www.flaticon.com/)
- **Eva Icons**: [MIT](https://github.com/akveo/eva-icons#license)
- **Feather Icons**: [MIT](https://github.com/feathericons/feather/blob/master/LICENSE) and open source by [feather icons](https://github.com/feathericons/feather)
- **Font awesome4 icons** : [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome#license)
- **Font awesome5 icons** : [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome#license)
- **Foundation**: [MIT](https://github.com/zurb/foundation-icons)
- **IcoMoon**: [GPL / CC BY 4.0](https://github.com/Keyamoon/IcoMoon-Free), [GPL / CC BY 4.0](https://icomoon.io/app/#/select/library)
- **Iconly**: MIT by [piqo design](https://dribbble.com/Piqodesign)
- **Ion Icons**: [MIT](https://github.com/ionic-team/ionicons#license)
- **Linear Icons**: [CC BY-SA 4.0](https://linearicons.com/free)
- **Material Design Icons**: [Apache license version 2.0.](https://material.io/resources/icons)
- **Medical Icons**: free icon pack from [flat icons](https://www.flaticon.com/)
- **Oct Icons**: [MIT](https://github.com/primer/octicons#license)
- **SnappMarket Icons**: [MIT](http://snapp.market) by [SnappMarket](https://www.snapp.market/)
- **Support Icons**: free icon pack from [flat icons](https://www.flaticon.com/)
- **Tabler Icons**: MIT by [Tabler Icons](https://www.tablericons.com/)
