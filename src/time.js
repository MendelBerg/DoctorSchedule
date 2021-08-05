const multiplyTime = (time, duration = 45) => {
  const [H, M] = time.split(':');
  const sumMin = +M + duration;

  if (sumMin < 60) return `${H}:${sumMin}`;

  const hours = +H + Number.parseInt(sumMin / 60);
  const minutes = sumMin % 60;

  return `${hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
};

export const getTimeOrder = (startTime, appointments, endDay, order = []) => {
  const startExist = appointments.length ? appointments[0].start : endDay;
  const duration = appointments.length && appointments[0].duration;
  const endTime = multiplyTime(startTime);

  if (endTime <= startExist) {
    order.push(startTime);
  }

  return endTime > startExist && !duration
    ? order
    : getTimeOrder(
        endTime < startExist ? endTime : multiplyTime(startExist, duration),
        endTime < startExist ? appointments : appointments.slice(1),
        endDay,
        order,
      );
};
