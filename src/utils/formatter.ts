// https://docs.w3cub.com/javascript/global_objects/intl/numberformat/numberformat

export const commaFormat = (value: number | string, places: number = 18) => {
  const parts = value.toString().split('.');
  parts[0] = (parts[0].replace(/^0+/, '') || '0').replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );
  parts[1] = (parts[1] ?? '').slice(0, places).replace(/0*$/, '');
  if (!parts[1]) parts.pop();
  return parts.join('.');
};

export const formatInProcess = (value: string, decimals: number) => {
  if (value === '') return value;
  if (value[value.length - 1] === '.') return commaFormat(value) + '.'; // 소수점 입력 안 했을 때 '3.'
  return commaFormat(value, decimals);
};

/** (display용) 0이면 {displayOnZero}값으로, 0보다 크고 1e-6보다 작으면 <0.000001로, 크면 comma 표기한다. */
export const formatOrfloorTiny = (
  value: string | number,
  displayOnZero: string = '0.0',
  threshold: number = 1e-6
): string => {
  return +value >= 1e-6
    ? commaFormat(fromExponential(value), 6)
    : +value
    ? `<${threshold}`
    : displayOnZero;
};

/**
 * swap 환율 표기 부분
 * @param value display number
 * @returns formatted number
 */
export const formatExchangeRate = (value: string | number): string => {
  return +value > 1e-6
    ? commaFormat(
        Number(value).toLocaleString('fullwide', { useGrouping: false })
      )
    : '0';
};

export const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
}).format;
export const percFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  signDisplay: 'never',
  maximumSignificantDigits: 2
}).format;

export const intervalFormat = (sec: number) => {
  let hours: number | string = Math.floor(sec / 3600);
  let minutes: number | string = Math.floor((sec - hours * 3600) / 60);
  let seconds: number | string = sec - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

type exponentialNum = number | string | Array<any>;

/**
 * 지수 표현식을 파츠로 나누는 함수
 * @param {number|string|Array} num
 * @return {string[]}
 */
export const getExponentialParts = (num: exponentialNum) => {
  return Array.isArray(num) ? num : String(num).split(/[eE]/);
};

/**
 * 지수 표현식인지 판별하는 함수
 * @param {number|string|Array} num
 */
export const isExponential = (num: exponentialNum) => {
  const eParts = getExponentialParts(num);
  return !Number.isNaN(Number(eParts[1]));
};

/**
 * 지수 표현식을 문자열로 변환하는 함수
 * @param {number|string|Array} num
 * @return {string}
 */
export const fromExponential = (num: exponentialNum) => {
  const eParts = getExponentialParts(num);
  if (!isExponential(eParts)) {
    return eParts[0];
  }

  const sign = eParts[0][0] === '-' ? '-' : '';
  const digits = eParts[0].replace(/^-/, '');
  const digitsParts = digits.split('.');
  const wholeDigits = digitsParts[0];
  const fractionDigits = digitsParts[1] || '';
  let e = Number(eParts[1]);

  if (e === 0) {
    return `${sign + wholeDigits}.${fractionDigits}`;
  } else if (e < 0) {
    // move dot to the left
    const countWholeAfterTransform = wholeDigits.length + e;
    if (countWholeAfterTransform > 0) {
      // transform whole to fraction
      const wholeDigitsAfterTransform = wholeDigits.substr(
        0,
        countWholeAfterTransform
      );
      const wholeDigitsTransformedToFraction = wholeDigits.substr(
        countWholeAfterTransform
      );
      return `${
        sign + wholeDigitsAfterTransform
      }.${wholeDigitsTransformedToFraction}${fractionDigits}`;
    } else {
      // not enough whole digits: prepend with fractional zeros

      // first e goes to dotted zero
      let zeros = '0.';
      e = countWholeAfterTransform;
      while (e) {
        zeros += '0';
        e += 1;
      }
      return sign + zeros + wholeDigits + fractionDigits;
    }
  } else {
    // move dot to the right
    const countFractionAfterTransform = fractionDigits.length - e;
    if (countFractionAfterTransform > 0) {
      // transform fraction to whole
      // countTransformedFractionToWhole = e
      const fractionDigitsAfterTransform = fractionDigits.substr(e);
      const fractionDigitsTransformedToWhole = fractionDigits.substr(0, e);
      return `${
        sign + wholeDigits + fractionDigitsTransformedToWhole
      }.${fractionDigitsAfterTransform}`;
    } else {
      // not enough fractions: append whole zeros
      let zerosCount = -countFractionAfterTransform;
      let zeros = '';
      while (zerosCount) {
        zeros += '0';
        zerosCount -= 1;
      }
      return sign + wholeDigits + fractionDigits + zeros;
    }
  }
};
