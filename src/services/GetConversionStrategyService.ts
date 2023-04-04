type Strategy = {
  parsed: string;
  unit: string;
};

const ConvertSoilValue = (value: string): Strategy => {
  let x = Number(value);

  let result =
    -0.0000000247 * x ** 3 +
    0.0002081861 * x ** 2 -
    0.5757154575 * x +
    563.1403592886;

  return { parsed: result.toString(), unit: "%" };
};

const GetConversionStrategyService = (
  topic: string
): ((value: string) => Strategy) => {
  if (topic.toLocaleLowerCase().includes("soil")) return ConvertSoilValue;

  return (value) => ({ parsed: value, unit: "DEFAULT" });
};

export { GetConversionStrategyService };
