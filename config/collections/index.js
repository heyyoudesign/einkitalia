/** All markdown files as a collection for sitemap.xml */
const allMarkdown = collection => {
    return collection.getFilteredByGlob('./content/**/*.md');
  };
  
  // projects english
  const getProjectsEN = collection => {
    const projects = collection.getFilteredByGlob('./content/en/projects/*.md');
    return projects.reverse();
  };
  
  // blog english
  const getBlogsEN = collection => {
    const blogs = collection.getFilteredByGlob('./content/en/blog/*.md');
    return blogs.reverse();
  };
  
  // projects italian
  const getProjectsIT = collection => {
    const projects = collection.getFilteredByGlob('./content/it/projects/*.md');
    return projects.reverse();
  };
  
  // blog italian
  const getBlogsIT = collection => {
    const blogs = collection.getFilteredByGlob('./content/it/blog/*.md');
    return blogs.reverse();
  };
  
  const getBlogsAllFullLang = collection => {
    return collection
      .getFilteredByGlob('./content/*/blog/*.md')
      .filter(post => post.data.category == 'blogpost');
  };
  
  const getBlogsAllLang = collection => {
    return collection.getFilteredByGlob('./content/*/blog/*.md');
  };
  
  module.exports = {
    allMarkdown,
    getProjectsEN,
    getBlogsEN,
    getProjectsIT,
    getBlogsIT,
    getBlogsAllFullLang,
    getBlogsAllLang
  };