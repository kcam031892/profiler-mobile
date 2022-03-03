export const abbreviateNumber = (value) => {
  if (isNaN(value) || typeof value === typeof undefined) {
    return 0;
  }
  if (value > 999999999999) {
    return value > 999999999999 ? (value / 1000000000000).toFixed(1) + 'T' : value;
  } else if (value > 999999999) {
    return value > 999999999 ? (value / 1000000000).toFixed(1) + 'B' : value;
  } else if (value > 999999) {
    return value > 999999 ? (value / 1000000).toFixed(1) + 'M' : value;
  } else if (value > 999) {
    return value > 999 ? (value / 1000).toFixed(1) + 'K' : value;
  } else {
    return parseFloat(value).toLocaleString(navigator.language, {
      maximumFractionDigits: 2,
    });
  }
};
