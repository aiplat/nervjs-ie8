let site = {
  name: 'AI智能空间',
  url: 'aiplat.com',
  href: 'https://aiplat.com',
  title: 'nervjs-ie8',
  keywords: 'AI智能空间,aiplat.com',
  description: 'AI智能空间,专注计算机软件技术',
  author: 'womendi@qq.com'
};
let des = {
  index: {
    title: site.title + '-首页',
    keywords: site.keywords,
    description: site.description,
    author: site.author
  },
  apps: {
    title: site.title + '-应用展示',
    keywords: site.keywords,
    description: site.description,
    author: site.author
  },
  donate: {
    title: site.title + '-捐赠我们',
    keywords: site.keywords,
    description: site.description,
    author: site.author
  }
};

module.exports = des;
