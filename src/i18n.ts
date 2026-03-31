
import en from './translations/en'
import pl from './translations/pl'

type Messages = typeof en  // en is the "master" shape

const messages: Record<string, Messages> = { en, pl }

export let locale: string = localStorage.getItem('lang') || 'en'

function getSubTranslationByIndex(key: string, result: string): string {
    const resultString: string = result
    const parts = resultString.split(/\{\{|\}\}/)
    const index = parseInt(key.split('_')[1], 10)
    return parts[index]
}

export function t(key: string): string
{
    const unformattedKey = key
    const usesSubTranslations = (key.split('_').length === 2)

    if (usesSubTranslations)
        key = key.split('_')[0]

    const keys = key.split('.')
    let result: any = messages[locale]
    for (let i = 0; i < keys.length; i++) {
        if (result === undefined || result === null) return key
        result = result[keys[i]]
    }

    if (result !== undefined && usesSubTranslations)
        result = getSubTranslationByIndex(unformattedKey, result)

    return result !== undefined ? result : key
}

export function setLocale(lang: string): void {
    locale = lang
    localStorage.setItem('lang', lang)
}