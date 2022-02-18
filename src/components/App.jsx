import React, { Component } from 'react';
import Header from './Header.component/Header';
import NewsLogo from './NewsLogo.component/NewsLogo';
import NewsFeed from './NewsFeed.component/NewsFeed';
import Search from './Search.component/Search';
import NewsDisplay from './NewsDisplay.components/NewsDisplay';
import Footer from './Footer.component/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      names: [],
      searchField: '',
      gottenArticle: '',
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08b686a248094b5ca8db26507b9a3267')
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      const names = articles.map(article => article.source.name);
      this.setState({
        articles: articles,
        names: names,
      })
    })
  }

  render() {
    const { articles, names, searchField, gottenArticle } = this.state;
    const filteredNames = [...new Set(names.filter(name => name.toLowerCase().includes(searchField.toLowerCase())))];
    const filteredArticles = articles.filter(article => gottenArticle.includes(article.source.name));
    return (
      <div className="App">
        <Header />
        <NewsLogo />
        <NewsFeed names={filteredNames} getArticle={e => this.setState({gottenArticle: e.target.textContent})} />
        <Search searchField={e => this.setState({searchField: e.target.value})} searchButton={(e) => {
          e.target.previousSibling.value = '';
          this.setState({searchField: ''});
          this.setState({gottenArticle: filteredNames});
        }} />
        <NewsDisplay articles={filteredArticles} />
        <Footer />
      </div>
    );
  } 
}

export default App;
