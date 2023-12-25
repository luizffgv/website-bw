/**
 * Linearly interpolates between {@link from} and {@link to}.
 *
 * @param from - Start value, returned when {@link where} is 0.
 * @param to - End value, returned when {@link where} is 1.
 * @param where - Value used to interpolate.
 * @returns Interpolated value between {@link from} and {@link to}.
 */
export default function lerp(from: number, to: number, where: number) {
  return from + where * (to - from);
}
