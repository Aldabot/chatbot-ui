import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

const resources = {
  'ca_ES': {
    translation: {
      "Preguntar": "Preguntar",
      'Soy el Chatbot de Aigues': "Soc el Chatbot d'Aigues",
      'Por favor, pregúntame algo': "Si us plau, pregunta-m'ho una mica",
      'Usario anónimo': 'Usuari anònim',
      'Respuesta': 'Resposta',
      'Enviada por': 'Enviada per',
      'Preguntame algo': 'Preguntame alguna cosa',
    }
  }
}

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: window.chatbotLanguage, //'ca_ES',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })


export default i18n;
