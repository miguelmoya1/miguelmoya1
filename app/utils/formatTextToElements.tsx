export const formatTextToElements = (text: string) => {
  return text
    .split('. ')
    .filter(Boolean)
    .map((p, i) => (
      <>
        <p key={i}>{p}.</p>
        <br />
      </>
    ));
};
