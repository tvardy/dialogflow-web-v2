export default {
    gateway: process.env.VUE_APP_GATEWAY_URL || 'https://dialogflow-web-v2.core.ushaflow.com', // <- enter your gateway URL here
    muted: true, // <- mute microphone at start
    microphone_allow: false, // <- allow using microphone
    history_allow: false, // <- allow the chat history usage (remove to use default behaviour)
    start_suggestions: [], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable,
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}