<template>
    <div class="title">
        <p class="title__mesage">{{ message }}</p>
        <p class="title__task">
            <span class="title__task-top">You've got </span>
            <span class="title__task-total">{{ taskTotal }}</span>
            <span class="title__task-bottom"> tasks today.</span>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'Hello Sj',
            taskTotal: 5
        }
    }
}
</script>
<style lang="scss">
.title {
    max-width: $max-width;
    margin: 0 auto;
    letter-spacing: 0.03rem;
    color: #fff;

    &__mesage {
        font-size: 1.6rem;
    }

    &__task {
        margin-top: 3.5rem;
        margin-bottom: 3rem;
        font-weight: bold;

        &-top {
            display: block;
            font-size: 1.8rem;
        }

        &-total {
            font-size: 4.4rem;
            line-height: 110%;
        }

        &-bottom {
            display: block;
            font-size: 1.8rem;
            line-height: 100%;
        }
    }
}
</style>