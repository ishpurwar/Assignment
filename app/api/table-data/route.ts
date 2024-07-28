export const POST = async (req: Request) => {
  const { filter } = (await req.json()) || {};
  const data = Array.from({ length: 12 }, (_, index) => ({
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][index],
    value: Math.floor(Math.random() * 100),
  }));

  const filteredData = filter ? data.slice(filter.start, filter.end + 1) : data;

  return  Response.json(filteredData, { status: 200 });
};
