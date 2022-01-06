# VuePress Plugin NetaBare Switch

Toggle switch for ネタバレ (NetaBare)

> ネタバレ (NetaBare) means *spoiler*

Articles using this plugin toggle showing the NetaBare sentences.

> This plugin is for VuePress v2

## Recommendation

Styles in components are written by Tailwind CSS.
Adding [`Windi CSS`](https://windicss.org/) is recommended.

### If you use `vuepress-vite`

```bash
npm install -D windicss vite-plugin-windicss
```

```ts
// config.ts
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundlerConfig: {
    viteOptions: {
      plugins: [
        WindiCSS(),
      ],
    },
  },
})
```

## Install

```bash
$ npm install -D vuepress-plugin-netabare-switch

or

$ yarn add -D vuepress-plugin-netabare-switch
```

## Usage

Add `vuepress-plugin-netabare-switch` in your config file.

```javascript
plugins: [
  ['vuepress-plugin-netabare-switch'], // add
],
```

in your article file (`.md`)

```html
<NetaBareSwitch>Show spoiler</NetaBareSwitch>
```

and writing like below:

```html
## The culprit is <NetaBareSpan bare="Mr. Foo">◯◯</NetaBareSpan>

<NetaBareDiv>

Message that do not contain spoilers is here.
It is recommended that the first line be a blank line for markdown parser.
</NetaBareDiv>

<NetaBareDiv bare>

Message containing spoilers is here.
</NetaBareDiv>

<NetaBareDiv bare :isBare="false">

Message that do not contain spoilers is here.
`isBare` prop takes priority of `bare` attribute.
</NetaBareDiv>
```

![NetaBare Switch](https://github.com/monsat/vuepress-plugin-netabare-switch/blob/main/doc/images/netabare-switch.gif?raw=true)

## Options

```javascript
plugins: [
  ['vuepress-plugin-netabare-switch', {
    // Prefix of keys for LocalStorage
    // default: 'netabare'
    keyPrefix: 'nb',

    // Prefix of components name
    // default: 'NetaBare'
    componentPrefix: 'NB', // -> `<NBSwitch/>`
  }],
],
```

## Component Slots, Props ,and Attributes

### `<NetaBareSwitch>`: Toggle switch.

`#default` slot is message to toggle NetaBare

Default is in Japanese.
#### `name?: string` prop

using for `<input type=checkbox class="toggle-checkbox">` id and storage key

#### CSS

```html
<div :class="switchWrapperClass">
  <input type=checkbox class="toggle-checkbox" :class="buttonClass" />
  <label class="toggle-label" :class="switchBgClass" />
</div>
<label :class="labelClass">
  <slot name="default" />
</label>
```

```css
.toggle-checkbox {
  background-color: var(--c-text);
}
.toggle-checkbox:checked {
  right: 0;
  background-color: var(--c-tip-bg);
}
.toggle-checkbox + .toggle-label {
  box-sizing: border-box;
  border: 1px solid var(--c-tip);
  background-color: var(--c-tip-bg);
}
.toggle-checkbox:checked + .toggle-label {
  background-color: var(--c-tip);
}
```

### `<NetaBareDiv>`: Div of spoiler

`#default` slot is paragraph including/excluding spoiler.

#### `isBare?: boolean` prop

If true, messages in the default slot are including spoiler.
If false, without spoiler even if `bare` attribute exists.

#### `bare` attribute

If exists, messages in the default slot are including spoiler.

### `<NetaBareSpan>`: Span of spoiler

`#default` slot is words excluding spoiler.

`bare` **prop** is words including spoiler.

## Reference

- [VuePress](https://v2.vuepress.vuejs.org/)
- [Windi CSS](https://windicss.org/)

## License

MIT
