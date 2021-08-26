import Tile from '../Tile';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';

function MinSize() {
  return (
    <ReactSplit
      direction={SplitDirection.Horizontal}
      minWidths={[500, 50]} // In pixels.
    >
      <Tile/>
      <ReactSplit
        direction={SplitDirection.Vertical}
        minHeights={[100, 100]} // In pixels.
      >
        <Tile/>
        <Tile/>
      </ReactSplit>
    </ReactSplit>
  );
}

export default MinSize;

