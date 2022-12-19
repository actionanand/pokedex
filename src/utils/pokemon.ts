export const heightUnit = (height: number | undefined): string => {
  if (height === undefined) {
    return 'Not Found!';
  }

  let unit = 'cm';
  let length = height * 10;

  if (length >= 100) {
    unit = 'm';
    length = +(length / 100).toFixed(2);
  }

  return `${length} ${unit}`;
};

export const weightUnit = (weight: number | undefined) => {
  if (weight === undefined) {
    return 'Not Found!';
  }

  let unit = 'g';
  let mass = weight * 100;

  if (mass >= 1_000) {
    mass = +(mass / 1_000).toFixed(1);
    unit = 'kg';
  }

  return `${mass} ${unit}`;
};
