const roundToTwoDecimals = number => +(Math.round(number + "e+2") + "e-2");

export default roundToTwoDecimals;