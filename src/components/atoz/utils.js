export const getDietPillClass = (diet) => {
  const dietLower = diet.toLowerCase();
  if (dietLower.includes("herb")) return "herb";
  if (dietLower.includes("carn")) return "carn";
  return "default";
};
