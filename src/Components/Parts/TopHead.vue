<template>
    <header class="app-head">
        <img v-if="app.avatarUri" class="app-icon" :alt="app.displayName" :src="app.avatarUri">
        <img v-else class="app-icon" src="https://console.dialogflow.com/api-client/assets/img/logo-short.png" :alt="app.displayName">
        <div class="app-info">
            <div class="app-name">{{app.displayName}}</div>
            <div v-if="app.description" class="app-poweredby">{{app.description}}</div>
            <div v-else class="app-poweredby">Built with <a target="_blank" rel="noopener noreferrer" href="https://dialogflow.cloud.ushakov.co" aria-hidden="true">Dialogflow Gateway</a></div>
        </div>
        <slot />
    </header>
</template>

<style lang="sass" scoped>
@import '@/Style/Mixins'

.app-head
    display: flex
    z-index: 666
    padding: 12px
    position: fixed
    background-color: var(--background)
    width: 100%
    box-sizing: border-box
    box-shadow: 0 3px 6px 2px rgba(128, 128, 128, .22)

    .app-icon
        border-radius: 8px
        width: 36px
        height: 36px
        object-fit: cover
        background-color: var(--image-background)

    .app-info
        display: inline-block
        margin-left: 10px

        .app-name
            font-size: 18px
            font-weight: 500
            color: var(--text)
            line-height: 15px

        .app-poweredby
            margin-top: 4px
            color: var(--text-secondary)
            font-size: 13px

            a[href]
                color: var(--text)
                text-decoration: none

.audio-toggle
    @include reset
    display: none
    position: fixed
    top: 0
    right: 0
    margin: 8.5px 0
    z-index: 999
    padding: 8px
    background-color: var(--element-background)
    border-radius: 20px 0 0 20px
    cursor: pointer
    color: var(--text)
    transition: padding .25s ease

    &:hover
        padding-right: 20px
</style>

<script>
export default {
    name: 'TopHead',
    props: {
        app: {
            type: Object,
            default: null
        }
    }
}
</script>