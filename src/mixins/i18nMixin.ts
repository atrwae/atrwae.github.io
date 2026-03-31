import Vue from 'vue'
import { t } from '@/i18n'

export default Vue.extend({
    data() {
        return {
            currentLang: localStorage.getItem('lang') || 'en'
        }
    },
    methods: {
        t(key: string) {
            return t(key)
        }
    }
})