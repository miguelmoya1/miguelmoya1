export const formatTextToElements = (text: string) => {
  return (
    text
      .split('. ')
      .filter(Boolean)
      // Remove the last . from the last element
      .map((p, i, arr) => (i === arr.length - 1 ? p : `${p}.`))
      .map((p, i) => (
        <>
          <p key={i}>{p}.</p>
          <br />
        </>
      ))
  );
};
