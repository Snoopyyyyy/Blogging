const sql = require('../config/mysql');

const Article = function(Article) {
    this.title = Article.title;
    this.author = Article.author;
    this.content = Article.content;
    this.date = Article.date;
}

Article.create = (newArticle, result) => {
    sql.query('INSERT INTO article SET ?', newArticle, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newArticle})
    })
}

Article.getAll = (result) => {
    sql.query('SELECT * FROM article', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, res)
    })
}

Article.getOne  = (id, result) => {
    sql.query(`SELECT * FROM article WHERE id=${id}`, (err,res) => {
        if(err || !res || !res[0]){
            result(err,null);
            return;
        }
        result(null, res[0])
    })
}

Article.updateById = (id,article, result ) => {
    sql.query(`UPDATE article SET title = ? ,  author = ? ,  content = ? ,  date = ?  WHERE id = ${id} `,
        [article.title,article.author,article.content,article.date], (err,res) => {
            if(err || !res || !res[0] ){
                result(err,null);
                return;
            }
            result(null, res[0])
        })
}
Article.deleteById = (id, result ) => {
    sql.query(`DELETE FROM article WHERE id = ${id}`, (err,res) => {
        if(err || !res || !res[0] ){
            result(err,null);
            return;
        }
        result(null, res[0])
    })
}


module.exports = Article;