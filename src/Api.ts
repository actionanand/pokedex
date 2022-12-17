export const detailFetcher = (name: string) => async () => {
  const detailsResp = await fetch(`${process.env.REACT_APP_API_URL}pokemon/${name}`);
  const details = await detailsResp.json();

  const speciesResp = await fetch(details.species.url);
  const species = await speciesResp.json();

  return { ...details, names: species.names };
};

export const listfetcher =
  () =>
  async ({ pageParam = 0 }) => {
    let limit = 100;
    // let offset = 0;

    const listResp = await fetch(`${process.env.REACT_APP_API_URL}pokemon?limit=${limit}&offset=${pageParam * 100}`);
    const respJson = await listResp.json();
    return { ...respJson, page: pageParam };
  };
