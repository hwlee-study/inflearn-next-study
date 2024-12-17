/**
 * 비동기 요청 시 지연발생
 */
export default function sleep(ms: number) {
  return new Promise((readyFunction) => setTimeout(readyFunction, ms))
}
