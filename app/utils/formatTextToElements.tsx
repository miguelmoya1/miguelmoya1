export const formatTextToElements = (text: string) => {
  return (
    text
      .split('. ')
      .filter(Boolean)
      // Remove the last . in all the sentences
      .map((p) => p.replace(/\.$/, ''))
      .map((p, i) => (
        <>
          <p key={i}>{p}.</p>
          <br />
        </>
      ))
  );
};
