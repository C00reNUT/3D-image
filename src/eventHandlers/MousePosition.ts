// gets mouse position relative to target element in %
// returns values in range -0.5 to 0.5, so [0, 0] is center
type MousePosition = [number, number];

function getRelativeMousePosition(e: MouseEvent): MousePosition {
  const target = <HTMLCanvasElement>e.target;
  // how to do destructuring assignment in TS? 😂
  const rect = target.getBoundingClientRect();
  const width: number = rect.width;
  const height: number = rect.height;
  const left: number = rect.left;
  const top: number = rect.top;
  const pX: number = -0.5 + (e.clientX - left) / width;
  const pY: number = 0.5 - (e.clientY - top) / height;
  return [pX, pY];
}
export default getRelativeMousePosition;
