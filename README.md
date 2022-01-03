# VuePress Plugin NetaBare Switch

Toggle switch for ネタバレ (NetaBare)

> ネタバレ (NetaBare) means *spoiler*

Articles using this plugin toggle the NetaBare sentence.

> This plugin is for VuePress v2

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
  <template #default>
    Message that do not contain spoilers is here.
  </template>
  <template #bare>
    Message containing spoilers is here.
  </template>
</NetaBareDiv>

```

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

## Reference

- [VuePress](https://v2.vuepress.vuejs.org/)

## License

MIT
