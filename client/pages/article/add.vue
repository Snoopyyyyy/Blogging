<template>
    <div>
        <h1> Add Article Page </h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '~/plugins/models/Article';

export default Vue.extend({
    name: 'AddArticlePage',
    data(): {article: Article} {
        return {
            article: new Article()
        }
    }
})
</script>
  