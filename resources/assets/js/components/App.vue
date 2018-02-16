<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Index</div>
                    <div class="card-body">
                        Index component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu.vue'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        componets:{
            TopMenu,
        }
    }
</script>
