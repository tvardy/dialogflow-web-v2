<template>
    <div class="component"><slot /></div>
</template>

<style lang="sass" scoped>
.component
    padding-bottom: 10px
    width: 70%
    word-break: break-word

    &:empty,
    & > .bubble:empty
        display: none

    @media screen and (max-width: 720px)
        width: 100%
</style>

<script>
export default {
    name: 'RichComponent'
}
</script>