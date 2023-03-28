<template>
    <div>
        <h1> Article Page </h1>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <a :href="'/article/'+article.id">
                    <span>{{ article.title }} - {{ article.author }}</span>
                    <p>{{ article.content }}</p>
                    <span>{{ article.date }}</span>   
                </a>         
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '~/plugins/models/Article';

export default Vue.extend({
    name: 'ArticlePage',
    async asyncData({ $services }) {
        return {
            articles: await $services.articles.getAll()
        }
    },
    data(): {articles: Article[]} {
        return {
            articles: []
        }
    }
})
</script>
  