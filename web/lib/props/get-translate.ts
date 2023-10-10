import { headers } from 'next/headers';

export async function getTranslate(currentLang?: string) {
  const headersStatus = headers();
  const lang = currentLang ?? headersStatus.get('Accept-Language');
  const langToUse = lang?.split(',')[0].split('-')[0];

  let translate: { [key: string]: string } = {};

  try {
    const translateLang = await import(`../../public/i18n/${langToUse}.json`);

    translate = translateLang.default;
  } catch (error) {
    const esTranslate = await import(`../../public/i18n/es.json`);

    translate = esTranslate.default;
  }

  const getTranslate = (key: string, args?: { [key: string]: string }) => {
    let value = translate[key] ?? key;

    if (!args) return value;

    Object.keys(args).forEach((arg) => {
      value = value.replace(`{{ ${arg} }}`, args[arg]).replace(`{{${arg}}}`, args[arg]);
    });

    return value;
  };

  return { langToUse, t: getTranslate };
}
