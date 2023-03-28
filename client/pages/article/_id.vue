<template>
    <div>
        <h1> Article {{ article.id }} Page </h1>

        <div>
            <span>{{ article.title }} - {{ article.author }}</span>
            <p>{{ article.content }}</p>
            <span>{{ article.date }}</span>   
        </div>  
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '~/plugins/models/Article';

export default Vue.extend({
    name: 'ArticleDetailPage',
    async asyncData({ $services, params }) {
        return {
            article: await $services.articles.getById(parseInt(params.id))
        }
    },
    data(): {article: Article} {
        return {
            article: new Article()
        }
    }
})
</script>
  