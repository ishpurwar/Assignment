export const POST = async (req: Request) => {
  try {
    const { filter } = (await req.json()) || {};
    const labels = [
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
    ];
    const values = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 100)
    );

    const filteredData = {
      labels: filter ? labels.slice(filter.start, filter.end + 1) : labels,
      values: filter ? values.slice(filter.start, filter.end + 1) : values,
    };

    return Response.json(filteredData, { status: 200 });
  } catch (error) {
    console.log(error);
    return  Response.json({ message: "Internal server error" }, { status: 500 });
  }
};
