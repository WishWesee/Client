/**
 *
 * @param date
 * date형식의 데이터를 "20xx.xx.xx" 형식으로 포멧하는 함수
 * @returns 20xx.xx.xx
 */
export function formatDateToCustomFormat(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
}

/**
 *
 * @param time: string
 * 14:00형식의 데이터를 "2:00 PM" 형식으로 포멧하는 함수
 * @returns 2:00
 */
export function formatTimeToCustomFormat(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  return `${hour < 12 ? hour : hour - 12}:${
    minute < 10 ? "0" + minute : minute
  } ${hour < 12 ? "AM" : "PM"}`;
}

/**
 *
 * @param time: string
 * 14:00형식의 데이터를 "2:00" 형식으로 포멧하는 함수
 * @returns 2:00
 */
export function formatTimeToAM(time: string): number {
  const returnTime =
    Number(time.split(":")[0]) < 12
      ? Number(time.split(":")[0])
      : Number(time.split(":")[0]) - 12;
  return returnTime;
}
