`ThumbUp` (component)
=====================

..

Props
-----

### `active`

Active or not when thumb is controlled

type: `boolean`


### `animateOnMount`

Should the thumb animates on mount. Only works when thumb is not controlled (default: true)

type: `boolean`
defaultValue: `true`


### `circleStyle`

circles style

type: `Object`


### `className`

type: `union`


### `controlled`

when thumb is controlled

type: `boolean`


### `disableCircle`

Hide the animated circle

type: `boolean`
defaultValue: `false`


### `disableDots`

Hide the animated dots

type: `boolean`
defaultValue: `false`


### `onClick`

`onClick` is required when thumb is controlled

type: function: `(isActive?: boolean) => void`


### `size`

Will override the `style`'s width/height is provided

type: `number`
defaultValue: `200`


### `style`

root's style (the wrapping div)

type: `Object`


### `svgStyle`

<svg />'s style

type: `Object`
defaultValue: `{
  enableBackground: `new ${svgViewBox}`,
}`


### `thumbStyles`

Should the thumb animates on mount. Only works when thumb is not controlled (default: true)

type: `union`
defaultValue: `{
  shirtColor: 'white',
  handColor: '#ef4040',
  fillOpacity: 1,
}`

