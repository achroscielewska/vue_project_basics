<template>
    <div class="container">
        <app-header></app-header>
        <hr class="test">
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './Shared/Header.vue';
    import Footer from './Shared/Footer.vue';
    import Servers from './Server/Servers.vue';
    import ServerDetails from './Server/ServerDetails.vue';

    export default {
        components: {
            'app-header': Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style lang="scss">
@import 'assets/breakpoints';

@media (min-width: $md) {
 .test{
   border-top: 1px solid red;
 }
}

</style>
