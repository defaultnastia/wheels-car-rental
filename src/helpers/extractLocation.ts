// === this helps to extract city and country name from the address string ===

const extractLocation = (address: string, location: "city" | "country") => {
  const [country, city] = address.split(",").reverse();
  return location === "city" ? city.trim() : country.trim();
};

export default extractLocation;
