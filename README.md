# React Split
React Split allows you to split views into resizable panels. Similar to Visual Studio Code, for example. It's used in [Devbook](https://usedevbook.com) - A Search Engine for Developers.

Here's a video of what you can build with react-split:

react-split is inspired by [Split.js](https://split.js.org/) and written as 100% functional component:
- All size calculation is done through CSS using `calc`
- No dependencies beside React
- Minimal assumptions about your styling and views

## Installing
```
npm install @devbookhq/react-split
# or
yarn add @devbookhq/react-split
```

## Usage

### Horizontal split
```tsx
import ReactSplit, { SplitDirection } from '@devbookhq/react-split'

function MyComponent() {
  return (
    <ReactSplit direction={SplitDirection.Horizontal}>
      <div>Tile 1</div>
      <div>Tile 2</div>
    </ReactSplit>
  );
}
```

### Vertical split
```tsx
import ReactSplit, { SplitDirection } from '@devbookhq/react-split'

function MyComponent() {
  return (
    <ReactSplit direction={SplitDirection.Vertical}>
      <div>Tile 1</div>
      <div>Tile 2</div>
    </ReactSplit>
  );
}
```

### Nested split
```tsx
import ReactSplit, { SplitDirection } from '@devbookhq/react-split'

function MyComponent() {
  return (
    <ReactSplit direction={SplitDirection.Vertical}>
      <div>Tile 1</div>
      <ReactSplit direction={SplitDirection.Horizontal}>
        <div>Tile 2</div>
        <ReactSplit direction={SplitDirection.Vertical}>
          <div>Tile 3</div>
          <div>Tile 4</div>
        </ReactSplit>
      </ReactSplit>
    </ReactSplit>
  );
}
```


To see more examples check out the [examples](#Example) section.

## Examples
Check the [`example`](./example/src/App.tsx) folder or the [CodeSandbox project]().
- [Horizontal](./example/src/HorizontalSplit/index.tsx)
- [Vertical](./example/src/VerticalSplit/index.tsx)
- [Nested](./example/src/NestedSplit/index.tsx)
- [Styled gutter](./example/src/StyledGutter/index.tsx)
- [Minimal tile size](./example/src/MinSize/index.tsx)
- [Initial tile sizes](./example/src/InitialSizes/index.tsx)
- [Scrollable tiles](./example/src/ScrollableChildren/index.tsx)

