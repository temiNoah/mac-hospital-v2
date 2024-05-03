const CURRENCY_FORMATTER = new Intl.NumberFormat("en-IN", {
  currency: "USD",
  style: "currency",
})

//new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }
//new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }  ;//&#8358; Naira
const CURRENCY_FORMATTER_V2 = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' })

export function formatCurrency(number) {
  return CURRENCY_FORMATTER_V2.format(number)
}


/**
 * Parse a localized number to a float.
 * @param {string} stringNumber - the localized number
 * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
 * 
 * Example:
 * parseLocaleNumber('3.400,5', 'de');
   parseLocaleNumber('3.400,5'); // or if you have German locale settings
   // results in: 3400.5
 */
export function parseLocaleNumber(stringNumber, locale) {
  var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
  var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

  return parseFloat(stringNumber
    .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
    .replace(new RegExp('\\' + decimalSeparator), '.')
  );
}


export const reverseFormatCurrency = (formatedValue) => {
  const exp = /^\w{0,3}\W?\s?(\d+)[.,](\d+)?,?(\d+)?$/g
  const replacer = (f, group1, group2, group3) => {
    return group3 ? `${group1}${group2}.${group3}` : `${group1}.${group2}`
  }

  formatedValue = formatedValue.split(",").join("");
  const result = formatedValue.replace(exp, replacer) //`${formatedValue}` 

  console.log(`result=${result} , formatedValue=${formatedValue}`)

  return parseFloat(result)
}