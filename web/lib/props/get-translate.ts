import { cookies, headers } from 'next/headers';

export async function getTranslate() {
  const headersStatus = headers();
  const cookiesStatus = cookies();

  let langToUse = 'es';

  if (cookiesStatus.has('lang')) {
    langToUse = cookiesStatus.get('lang')!.value;
  } else {
    const lang = headersStatus.get('Accept-Language');
    langToUse = lang?.split(',')[0].split('-')[0]!;
  }

  let translate: { [key: string]: string } = {};

  try {
    const translateLang = await import(`../../locale/${langToUse}.json`);

    translate = translateLang.default;
  } catch (error) {
    const esTranslate = await import(`../../locale/es.json`);

    translate = esTranslate.default;
    langToUse = 'es';
  }

  const getTranslate = (key: string, args?: { [key: string]: string }) => {
    let value = translate[key] ?? key;

    if (!args) return value;

    Object.keys(args).forEach((arg) => {
      value = value.replace(`{{ ${arg} }}`, args[arg]).replace(`{{${arg}}}`, args[arg]);
    });

    return value;
  };

  return { t: getTranslate };
}
